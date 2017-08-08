import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

 class Header extends React.Component {
    render() {
      return (
        <nav>
          <IndexLink to="/" activeClassName="active">Home</IndexLink>
          {" | "}
          <Link to="/players" activeClassName="active">Players</Link>
          {" | "}
          <Link to="/about" activeClassName="active">About</Link>
          {this.props.loading && <LoadingDots interval={100} dots={20}/>}
        </nav>
      );
    }
 }

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
