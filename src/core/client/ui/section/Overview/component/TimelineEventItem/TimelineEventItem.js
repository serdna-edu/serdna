import React, {Component} from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import './TimelineEventItem.scss';

class TimelineEventItem extends Component {
  render() {
    return (
      <a href="#"
         className={
           [
             'serdna-overview-timeline-event-item',
             'list-group-item list-group-item-action align-items-start',
             'd-flex flex-row',
             this.props.className
           ].join(' ')
         }>
        <div className='d-flex serdna-overview-timeline-event-item__icon'>
          <FontAwesomeIcon
            icon={this.props.icon}
            className='d-flex'
            size="2x" />
        </div>
        <div className='d-flex flex-column serdna-overview-timeline-event-item__content'>
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{this.props.eventName}</h5>
            <small>{this.props.eventDateTime}</small>
          </div>
          <p class="mb-1 text-left">{this.props.eventDescription}</p>
        </div>
      </a>
    );
  }
}

export default TimelineEventItem;
