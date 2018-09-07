import React from 'react';
import './section-heading.m.css';

const SectionHeading = (props) => {
  return (
    <div styleName="topNewsTiltle">
      <h2 styleName = "topNewsTiltleHeading">{props.heading}</h2>
    </div>
  )
}

export {SectionHeading}
