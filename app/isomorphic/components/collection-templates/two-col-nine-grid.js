// Implement more logic here
import React from 'react';

import './two-col-nine-grid.m.css';
const Bigcard = ({story}) => {
  return (
    <React.Fragment>
      <img src = "//images.assettype.com/sakshipost%2F2018-09%2F18a19e2a-8d2c-454d-9693-e2277fb88d2a%2FYs_Jagan_public_meeting_sabbavaram_pendurthi.jpg?auto=format&rect=3,0,747,420&q=35&w=600&fm=pjpeg" />
      <h3 styleName="topStoryHeading">{story.headline}</h3>
    </React.Fragment>
  );
}

const Mediumcard = ({story}) => {
  return (
     <div styleName="mediumCard">
      <img src = "//images.assettype.com/sakshipost%2F2018-09%2Fe6d2f38f-b6d7-4878-8a3d-33367a1ae99b%2FGauri_Lankesh_Remembered_On_1st_Death_Anniversary.jpg?auto=format&rect=0,0,747,420&q=35&w=320&fm=pjpeg" styleName="mediumCardImage"/>
      <h3 styleName="topStoryMiddleHeading">{story.headline}</h3>
    </div>
  );
}

const Smallcard = ({story}) => {
  return (
    <div styleName="smallCard">
      <img src = "//images.assettype.com/sakshipost%2F2018-09%2F57818fb5-642c-47e2-85a7-51bfd09aea94%2FKCR.jpg?auto=format&rect=0,0,700,394&q=35&w=600&fm=pjpeg" styleName="smallStoryCardImage"/>
      <h3 styleName="smallHeading">{story.headline}</h3>
      <hr />
    </div>
  );
}


const Twocolninegrid = (props) => {
return (
  <div className="container">
    <div styleName="card">
      <div styleName="topNewsTiltle">
        <h3 styleName = "topNewsTiltle__heading">Top News</h3>
      </div>
      <div styleName="homePageTopCollectionCard">
        <div styleName="topStory">
          <Bigcard story={props.stories[0].story}/>
          <div styleName="twoCol">
            <Mediumcard story={props.stories[1].story}/>
            <Mediumcard story={props.stories[2].story}/>
          </div>
        </div>
        <div styleName="otherTopStory">
          {props.stories.slice(3,9).map(({story,id}) => {
            return <Smallcard story={story} key={id}/>
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

export {Twocolninegrid}
