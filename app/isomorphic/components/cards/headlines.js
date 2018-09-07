import React from 'react';
import './headline.m.css';

const Headline = ({story}) => {
  console.log(story);
  return <div styleName="headingWrapper"><h2 styleName="headlines">{story.headline}</h2></div>;
}

export {Headline}
