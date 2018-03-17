import React, {Component} from 'react';

import './CourseCard.scss';

class CourseCard extends Component {
  render() {
    return (
      <div className={
        [
          'card',
          this.props.className
        ].join(' ')
      } style={{width: '18rem'}}>
        <img className="card-img-top" src="/logo.svg" alt="Course art"/>
        <div className="card-body">
          <h5 className="card-title">Course Name</h5>
          <p className="card-text">Course Description</p>
          <a href="#" className="btn btn-primary">Go To Course</a>
        </div>
      </div>
    );
  }
}

export default CourseCard;
