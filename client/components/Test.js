import React from 'react';
import * as ml5 from 'ml5';

class Test extends React.Component {
  render() {
    return (
      <>
        <h1>Version: {ml5.version}</h1>
      </>
    );
  }
}

export default Test;
