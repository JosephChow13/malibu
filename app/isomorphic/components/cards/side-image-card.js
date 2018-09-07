import React from 'react';
import './side-image-card.m.css';
const SideImageCard = ({story,getImageUrl,sectionCard}) => {
  return (
    <div styleName="leftCard">
      <div styleName="imageCard">
        <picture styleName="sideImagePicture">
          <source media="(min-width: 767px)" srcSet={getImageUrl(story['hero-image-s3-key'])} styleName="leftCardImage"/>
          <img src = {getImageUrl(story['hero-image-s3-key'])} styleName="leftCardImage"/>
         </picture>
      </div>
      <h2 styleName="leftCardHeading">{story.headline}</h2>
    </div>
  );
}

export {SideImageCard}
