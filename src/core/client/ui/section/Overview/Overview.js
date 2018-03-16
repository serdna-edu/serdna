import React, {Component} from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import faClipboardCheck from '@fortawesome/fontawesome-free-solid/faClipboardCheck';
import faSun from '@fortawesome/fontawesome-free-solid/faSun';

import CourseCard from "./component/CourseCard/CourseCard";
import TimelineEventItem from "./component/TimelineEventItem/TimelineEventItem";

import './Overview.scss';

class Overview extends Component {
  constructor(props) {
    super(props);

    this.renderCourseCards = this.renderCourseCards.bind(this);
  }

  renderCourseCards(count) {
    let courseCards = [];

    for (let i = 0; i < count; i++) {
      courseCards.push(<CourseCard key={i} className={'mr-4 mb-4'} />);
    }

    return courseCards;
  }

  render() {
    return (
      <div className={'serdna-overview container-fluid'}>
        <div className={'row'}>
          <div class="jumbotron jumbotron-fluid w-100 mt-4">
            <div class="container">
              <div className={'d-flex align-items-end'}>
                <h1 class="d-flex text-left display-4">Good Morning User</h1>
                <FontAwesomeIcon style={{color: "#FFCC00"}} icon={faSun} className='ml-4 d-flex align-self-baseline' size="6x" />
              </div>

              <div className={'row'}>
                <div className='col-12 col-lg-10 col-xl-8'>
                  <h3 className='col-12 mt-2 text-left'>Recent Timeline Events</h3>
                  <div className='col-12 d-flex flex-wrap flex-row'>
                    <div class="list-group w-100">
                      <TimelineEventItem
                        icon={faClipboardCheck}
                        eventName='Math 113 Assignment 1 Marked'
                        eventDateTime='3 Days ago'
                        eventDescription='Good job! Click event for more information'
                        className={'active'} />
                      <TimelineEventItem
                        icon={faClipboardCheck}
                        eventName='Phys 124 Exam 1 Marked'
                        eventDateTime='3 Days ago'
                        eventDescription='Click event for more information' />
                      <TimelineEventItem
                        icon={faClipboardCheck}
                        eventName='Phys 125 Exam 1 Marked'
                        eventDateTime='3 Days ago'
                        eventDescription='Click event for more information' />
                      <button type="button" class="list-group-item list-group-item-action" disabled>Go to Timeline</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={'row'}>
          <h3 className='col-12 mt-2 text-left'>Courses</h3>
          <div className='col-12 d-flex flex-wrap flex-row'>
            {this.renderCourseCards(10)}
          </div>
        </div>
      </div>
    );
  }
}

export default Overview;
