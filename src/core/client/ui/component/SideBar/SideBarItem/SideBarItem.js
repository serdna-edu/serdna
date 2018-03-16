import { isString, isFunction, noop } from 'lodash';
import React, {Component} from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import './SideBarItem.scss';

class SideBarItem extends Component {
  render() {
    return (
      <li className={[
        'serdna-side-bar-item',
        'nav-item flex-fill flex-fill',
        this.props.active ? 'active' : '',
        this.props.class
      ].join(' ')}>
        <a className={[
          'nav-link d-flex flex-row align-items-center h-100',
          this.props.active ? 'active' : ''
        ].join(' ')}
           href={ isString(this.props.href) ? this.props.href : '#' }
           onClick={ isFunction(this.props.onClick) ? this.props.onClick : noop }>
          <FontAwesomeIcon icon={this.props.icon}
                           className='serdna-side-bar-item__icon d-flex'
                           size="lg" />
          <span className="serdna-side-bar-item__text ml-2 d-flex">{this.props.label}</span>
        </a>
      </li>
    );
  }
}

export default SideBarItem;
