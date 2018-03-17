import { isString, startCase, toLower } from 'lodash';
import React, {Component} from 'react';
import './Header.scss';

class Header extends Component {
  render() {
    const sectionName = this.props.match.params.section;
    const sectionNameFormatted =
      isString(sectionName) ?
        startCase(toLower(sectionName)) : '';  // Capitalize first character.

    return (
      <header className={[
        'serdna',
        'navbar navbar-expand navbar-dark',
        this.props.className
      ].join(' ')}>
        <h2 className="text-white">{sectionNameFormatted}</h2>
      </header>
    );
  }
}

export default Header;
