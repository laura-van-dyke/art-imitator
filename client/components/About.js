import React from 'react';
import { Link } from 'react-router-dom';
import Painting from './Painting';
import { badPaintings } from '../paintings';

class About extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div className="header">
            {/* <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=LinkedIn&logoColor=white" /> */}
            <h4>
              Developed by{' '}
              <a
                href="https://www.linkedin.com/in/lauraevandyke/"
                target="_blank"
              >
                Laura Van Dyke
              </a>
            </h4>
          </div>
          <h3 className="aboutBody">
            Art Imitator uses machine learning models to incorporate artistic
            elements into plain images. These models were trained on particular
            paintings using Logan Engstrom's style transfer deep neural network.
          </h3>
        </div>
        <div className="homeRow">
          <img className="homeImg" src="../../farmhouse.jpeg" />
          <img
            className="homeImg"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Irises-Vincent_van_Gogh.jpg/1280px-Irises-Vincent_van_Gogh.jpg"
          />
          <img className="homeImg" src="../../irisesFarmhouse.png" />
        </div>
        <div>
          <h3 className="aboutBody">
            It takes 3-4 hours to train each model using a Tesla V100 computer
            and not every model produces satisfying results. Check out some of
            the rejected models below.
          </h3>
          <div className="about-container">
            {Object.keys(badPaintings).map((painting) => {
              return (
                <Painting key={painting} painting={badPaintings[painting]} />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
