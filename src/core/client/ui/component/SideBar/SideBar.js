import React, {Component} from 'react';

// Fontawesome icons.
import faChevronCircleLeft from '@fortawesome/fontawesome-free-solid/faChevronCircleLeft';
import faChevronCircleRight from '@fortawesome/fontawesome-free-solid/faChevronCircleRight';
import faHome from '@fortawesome/fontawesome-free-solid/faHome';

import './SideBar.scss'
import SideBarItem from "./SideBarItem/SideBarItem";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {collapsed: false};
  }

  collapse() {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed
    }));
  }

  render() {
    return (
      <aside className={
        [
          'serdna',
          "navbar navbar-expand navbar-dark flex-column sentinel-ui-header",
          "p-0",
          "h-100",
          this.state.collapsed ? 'collapse' : 'collapse show',
          this.props.class
        ].join(' ')
      }>
        <ul className={
          [
            'serdna-logo',
            'nav flex-column w-100'
          ].join(' ')
        }>
          <li className="nav-item w-100 h-100 p-0">
            <a className="nav-link w-100 h-100 p-0 d-flex flex-row justify-content-center" href="/">
              <span className="serdna-logo__text align-self-center mr-0">SERDNA</span>
              <span className="serdna-logo__text serdna-logo__text-collapse align-self-center mr-0">S</span>
            </a>
          </li>
        </ul>
        <ul className={
          [
            'serdna-side-bar-list',
            'nav flex-column w-100'
          ].join(' ')
        }>
          <SideBarItem icon={faHome}
                       label="Dashboard"
                       collapsed={this.state.collapsed}
                       href='/dashboard'/>
        </ul>

        <ul className={
          [
            'serdna-side-bar-list serdna-side-bar-list--bottom',
            'nav flex-column w-100'
          ].join(' ')
        }>
          <SideBarItem icon={this.state.collapsed ? faChevronCircleRight : faChevronCircleLeft}
                       label="Collapse"
                       collapsed={this.state.collapsed}
                       onClick={this.collapse.bind(this)}/>
        </ul>
      </aside>
    );
  }
}

export default SideBar;
