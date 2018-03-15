import React, {Component} from 'react';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <header className={[
        "serdna",
        "navbar navbar-expand navbar-dark",
        this.props.class
      ].join(' ')}>
      </header>
    );
  }
}

export default Header;
