// Implement more logic here
import React from 'react';
import {SectionHeading} from '../cards/section-heading';
import {CardImageOnTop} from '../cards/card-image-on-top';
import {SideImageCard} from '../cards/side-image-card';
import './two-col-nine-grid.m.css';

const TwoColNineGrid = (props) => {
  const stories = props.stories.items[0].items;
  return (
    <div className="container">
      <div styleName="card">
        <SectionHeading heading="Top News"/>
        <div styleName="homePageTopCollectionCard">
          <div styleName="topStory">
            <CardImageOnTop modifier="big" story={stories[0].story} getImageUrl={props.getImageUrl}/>
            <div styleName="twoCol">
              <CardImageOnTop modifier="small" story={stories[1].story} getImageUrl={props.getImageUrl}/>
              <CardImageOnTop modifier="small" story={stories[2].story} getImageUrl={props.getImageUrl}/>
            </div>
          </div>
          <div styleName="otherTopStory">
            {stories.slice(3,9).map(({story,id}) => {
              return <React.Fragment>
                  <SideImageCard story={story} key={id} getImageUrl={props.getImageUrl} sectionCard="topNews"/>
                  <hr styleName="separetor"/>
              </React.Fragment>
            })}
          </div>
        </div>
        <div styleName="homePageTopAddCard">
          <img src = "https://secure.img-cdn.mediaplex.com/0/10599/246052/264235_in_cs_cm_cm_fy19q3w01_sit_lati_2in1_dtd_jma_300x600_R2.jpg?mpqs=&mpssl=1&mpvc=" />
        </div>
      </div>
    </div>
  );
}

export {TwoColNineGrid}
