import React from 'react';
import * as ml5 from 'ml5';

const paintings = {
  irises: {
    artist: 'Vincent van Gogh',
    title: 'Irises',
    year: 1889,
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Irises-Vincent_van_Gogh.jpg/1280px-Irises-Vincent_van_Gogh.jpg',
  },
  judgment: {
    artist: 'Wassily Kandinsky',
    title: 'The Last Judgement',
    year: 1912,
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
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
  }

  async transformImage() {
    const image = document.getElementById('userImg');
    const transformed = document.getElementById('transformed');
    const model = this.state.model;
    const result = await model.transfer(image);
    const newImg = new Image(500, 266);
    newImg.src = result.src;
    transformed.appendChild(newImg);
  }

  render() {
    const painting = paintings[this.props.painting];

    return (
      <div className="content">
        <div>
          <h1 className="artist">{painting.artist}</h1>
          <h1 className="title">{painting.title}</h1>
        </div>
        <img className="painting" src={painting.url} />
        <div>
          <input type="file" onChange={this.inputFile} />
          <img id="userImg" width="500px" src={this.state.file} />
        </div>
        <button type="button" onClick={this.transformImage}>
          Try it out
        </button>
        <p>Reimagined Image</p>
        <div id="transformed"></div>
      </div>
    );
  }
}

export default Transformation;
