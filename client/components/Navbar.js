import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <header className="flex-row">
        <Link to="/">
          <h1>Art Imitator</h1>
        </Link>
        <div className="flex-column nav-wrapper">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/paintings">Paintings</Link>
          </nav>
        </div>
      </header>
    );
  }
}

export default Navbar;
