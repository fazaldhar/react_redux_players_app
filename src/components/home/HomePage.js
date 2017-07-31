import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
  render() {
    return (
      <div className="jumbotron">
        <h1>National Players</h1>
        <p>React, redux and react router for creating players app</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
    );
  }
}

export default HomePage;
