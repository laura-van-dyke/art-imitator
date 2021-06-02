import React from 'react';
import * as ml5 from 'ml5';
import paintings from '../paintings';

class Transformation extends React.Component {
  constructor() {
    super();
    this.state = {
      painting: null,
      file: null,
      // model: null,
    };
    this.inputFile = this.inputFile.bind(this);
    //this.loadModel = this.loadModel.bind(this);
    this.transformImage = this.transformImage.bind(this);
  }

  componentDidMount() {
    const dev = process.env.NODE_ENV !== 'production';
    const painting = dev
      ? `http://localhost:8080/models/${this.props.painting}`
      : `https://art-imitator.herokuapp.com/models/${this.props.painting}`;
    // const model = await ml5.styleTransfer(painting);
    this.setState({ painting: painting });
  }

  inputFile(event) {
    this.setState(
      {
        file: URL.createObjectURL(event.target.files[0]),
      },
      this.transformImage
    );
    // setTimeout(this.transformImage, 1000);
  }

  // async loadModel() {
  //   const model = await ml5.styleTransfer(this.state.painting);
  //   this.setState({ model: model });
  // }

  async transformImage() {
    const model = await ml5.styleTransfer(this.state.painting);
    let image = document.getElementById('userImg');
    let width = image.width;
    let height = image.height;
    const transformed = document.getElementById('transformed');
    //const model = this.state.model;
    const result = await model.transfer(image);
    const newImg = new Image(width, height);
    newImg.src = result.src;
    transformed.appendChild(newImg);
  }

  render() {
    const painting = paintings[this.props.painting];
    console.log(this.state);

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
                className={painting.shorthand}
                src={this.state.file}
              />
            )}
          </div>
        </div>
        <div className="reveal">
          <div id="transformed"></div>
        </div>
      </div>
    );
  }
}

export default Transformation;
