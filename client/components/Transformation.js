import React from 'react';
import * as ml5 from 'ml5';

const paintings = {
  irises: {
    artist: 'Vincent van Gogh',
    title: 'Irises',
    year: 1889,
    class: 'irises',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Irises-Vincent_van_Gogh.jpg/1280px-Irises-Vincent_van_Gogh.jpg',
  },
  judgment: {
    artist: 'Wassily Kandinsky',
    title: 'The Last Judgment',
    year: 1912,
    class: 'judgment',
    url: 'https://www.wassilykandinsky.net/images/works/332.jpg?version=7',
  },
};

class Transformation extends React.Component {
  constructor() {
    super();
    this.state = {
      model: null,
      file: null,
    };
    this.inputFile = this.inputFile.bind(this);
    this.transformImage = this.transformImage.bind(this);
  }

  async componentDidMount() {
    const dev = process.env.NODE_ENV !== 'production';
    const painting = dev
      ? `http://localhost:8080/models/${this.props.painting}`
      : `https://derivativ.herokuapp.com/models/${this.props.painting}`;
    const model = await ml5.styleTransfer(painting);
    this.setState({ model: model });
  }

  inputFile(event) {
    this.setState(
      {
        file: URL.createObjectURL(event.target.files[0]),
      }
      // () => setTimeout(this.transformImage, 500)
    );
  }

  async transformImage() {
    let image = document.getElementById('userImg');
    let width = image.width;
    let height = image.height;
    const transformed = document.getElementById('transformed');
    const model = this.state.model;
    const result = await model.transfer(image);
    const newImg = new Image(width, height);
    newImg.src = result.src;
    transformed.appendChild(newImg);
  }

  render() {
    const painting = paintings[this.props.painting];

    return (
      <div className="content">
        <div className="placard">
          <h1 className="artist">{painting.artist}</h1>
          <h1 className="title">{painting.title}</h1>
        </div>
        <div className="sourceImages">
          <img className="paintingImg" src={painting.url} />
          <div className="userInput">
            {!this.state.file ? (
              <>
                <h3>Upload an Image</h3>
                <input type="file" onChange={this.inputFile} />
              </>
            ) : (
              <img
                id="userImg"
                className={painting.class}
                src={this.state.file}
                onLoad={this.transformImage}
              />
            )}
          </div>
        </div>
        <div className="reveal">
          {/* <button type="button" onClick={this.transformImage}>
            Transform Image
          </button> */}
          <div id="transformed"></div>
        </div>
      </div>
    );
  }
}

export default Transformation;
