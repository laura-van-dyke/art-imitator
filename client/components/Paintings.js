import React from 'react';
import Painting from './Painting';
import { paintings } from '../paintings';

class Paintings extends React.Component {
  render() {
    return (
      <>
        <h3>
          Art Imitator reimagines your photographs using machine learning models
          trained on works of art.
          <br />
          <br />
          Select a painting to begin.
        </h3>
        <div className="plants-container">
          {Object.keys(paintings).map((painting) => {
            return <Painting key={painting} painting={paintings[painting]} />;
          })}
        </div>
      </>
    );
  }
}

export default Paintings;
