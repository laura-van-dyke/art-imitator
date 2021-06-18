import React from 'react';
import Painting from './Painting';
import { paintings } from '../paintings';

class Paintings extends React.Component {
  render() {
    return (
      <>
        <h3 className="homeDescr">
          Art Imitator reimagines your photographs using machine learning models
          trained on works of art.{' '}
        </h3>
        <h3 className="homeText">Select a painting to begin.</h3>
        <div className="paintings-container">
          {Object.keys(paintings).map((painting) => {
            return <Painting key={painting} painting={paintings[painting]} />;
          })}
        </div>
      </>
    );
  }
}

export default Paintings;
