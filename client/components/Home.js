import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>
          Transform your photographs using a deep neural network trained on
          works of art
        </h2>
        <Link to={`/paintings`}>
          <h2 className="selectPainting">Select a painting</h2>
        </Link>

        <div className="homeRow">
          <img className="homeImg" src="../../farmhouse.jpeg" />
          <img
            className="homeImg"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Irises-Vincent_van_Gogh.jpg/1280px-Irises-Vincent_van_Gogh.jpg"
          />
          <img className="homeImg" src="../../irisesFarmhouse.png" />
        </div>
      </div>
    );
  }
}

export default Home;
