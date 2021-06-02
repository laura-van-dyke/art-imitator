import React from 'react';
import Painting from './Painting';
import paintings from '../paintings';

class Paintings extends React.Component {
  render() {
    console.log(Object.keys(paintings));
    return (
      <div className="plants-container">
        {Object.keys(paintings).map((painting) => {
          return <Painting key={painting} painting={paintings[painting]} />;
        })}
      </div>
    );
  }
}

export default Paintings;
