import React from 'react';
import Painting from './Painting';
import paintings from '../paintings';

class Paintings extends React.Component {
  render() {
    console.log(Object.keys(paintings));
    return (
      <>
        <h3>
          Select a painting to have your photographs reimagined by a deep neural
          network
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
