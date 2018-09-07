import React from 'react';
import './card-image-on-top.m.css';

const CardImageOnTop = ({story, modifier, getImageUrl}) => {
  return (
     <div styleName={`cardHeaderInlineDisplayMobile--${modifier}`}>
      <div styleName={modifier}>
        <picture styleName ="cardImageOnTop">
          <source media="(min-width: 767px)" srcSet={getImageUrl(story['hero-image-s3-key'])} styleName="cardImage"/>
          <img src = {getImageUrl(story['hero-image-s3-key'])} styleName="cardImage"/>
        </picture>
      </div>
      <h2 styleName={`cardImageOnTop--${modifier}`}>{story.headline}</h2>
    </div>
  );
}

export {CardImageOnTop}
