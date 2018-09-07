import React from 'react';
import {SectionHeading} from '../cards/section-heading';
import {CardImageOnTop} from '../cards/card-image-on-top';
import {SideImageCard} from '../cards/side-image-card';
import {Headline} from '../cards/headlines';
import "./three-col-layout-grid.m.css";

const ThreeColLayout = (props) => {
  const stories = props.stories.items[0].items;
  return (
    <div className="container">
      <div styleName="cards">
        <div styleName="crimeAndPolitics">
          <div styleName="crime">
            <SectionHeading heading="Crime"/>
            <CardImageOnTop modifier="big" story={stories[0].story} getImageUrl={props.getImageUrl}/>
            <Headline story={stories[1].story}/>
            <Headline story={stories[2].story}/>
            <Headline story={stories[3].story}/>
          </div>
          <div styleName="politics">
            <SectionHeading heading="Politics"/>
            <CardImageOnTop modifier="big" story={stories[4].story} getImageUrl={props.getImageUrl}/>
            <Headline story={stories[5].story}/>
            <Headline story={stories[6].story}/>
            <Headline story={stories[7].story}/>
          </div>
        </div>
        <div styleName="latest">
          <SectionHeading heading="Latest"/>
          {stories.slice(3,11).map(({story,id}) => {
            return <SideImageCard story={story} key={id} getImageUrl={props.getImageUrl} sectionCard="latest"/>
          })}
        </div>
      </div>
    </div>
  );
}

export {ThreeColLayout}
