import React from 'react';
import { Link } from 'react-router-dom';

function Painting(props) {
  const { artist, shorthand, url } = props.painting;
  props;
  return (
    <Link className="card" to={`/paintings/${shorthand}`}>
      <div>
        <img className="cardImg" src={url} style={{ width: '100%' }} />
        {/* <div className="container">
          <h4>
            <b>{artist}</b>
          </h4>
        </div> */}
      </div>
    </Link>
  );
}

export default Painting;
