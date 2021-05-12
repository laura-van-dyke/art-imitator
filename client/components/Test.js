import React from 'react';
import * as ml5 from 'ml5';

const dev = process.env.NODE_ENV !== 'production';
const m = dev
  ? 'http://localhost:8080/models/irises'
  : 'https://derivativ.herokuapp.com/models/irises';
// const irisesModel = 'http://localhost:8080/models/irises';
//const irisesModel = 'https://derivativ.herokuapp.com/models/irises';

let style;
let input = document.getElementById('inputImg');
let newPhoto = document.getElementById('newPhoto');
// let photo = './West-Virginia-Gorge-National-River.jpeg';

// style = ml5.styleTransfer(irisesModel, modelLoaded);
// function modelLoaded() {
//   console.log('Model loaded!');
//   style.transfer(input).then((result) => {
//     const newImg = new Image(250, 250);
//     newImg.src = result.src;
//     newPhoto.appendChild(newImg);
//   });
const applyModel = async () => {
  const image = document.getElementById('userImg');
  const newPhoto = document.getElementById('newPhoto');
  const model = await ml5.styleTransfer(m);
  const result = await model.transfer(image);
  console.log('ok');
  const newImg = new Image(500, 266);
  newImg.src = result.src;
  newPhoto.appendChild(newImg);
};

class Test extends React.Component {
  constructor() {
    super();
    this.state = { file: null };
    this.clickHandler = this.clickHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  clickHandler(evt) {
    applyModel();
    // ml5
    //   .styleTransfer(irisesModel)
    //   .then((style) => style.transfer(input))
    //   .then((result) => {
    //     const newImage1 = new Image(250, 250);
    //     newImage1.src = result.src;
    //     newPhoto.appendChild(newImage1);
    //   });
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
  }

  render() {
    return (
      <>
        <h1>Deep Neural Network and van Gogh's Irises</h1>
        <div>
          <input type="file" onChange={this.handleChange} />
          <img id="userImg" src={this.state.file} />
        </div>
        <p>Inspiration Image</p>
        <img
          className="irises"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Irises-Vincent_van_Gogh.jpg/1280px-Irises-Vincent_van_Gogh.jpg"
        />
        <p>Input Image</p>
        <img
          id="inputImg"
          src="./West-Virginia-Gorge-National-River.jpeg"
          alt="input img"
          id="inputImg"
        />
        <button type="button" onClick={this.clickHandler}>
          Try it out
        </button>
        <p>Reimagined Image</p>
        <div id="newPhoto"></div>
      </>
    );
  }
}

export default Test;
