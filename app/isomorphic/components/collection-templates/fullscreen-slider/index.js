import React from "react";
import Carousel from "../../carousel";
import { arrayOf, object } from "prop-types";
import {
  Link,
  ResponsiveHeroImage,
  NavigationComponentBase
} from "@quintype/components";
import "./fs-slider.m.css";

export class FullscreenSlider extends NavigationComponentBase {
  render() {
    return (
      <Carousel
        onClickItem={index =>
          this.navigateTo(`/${this.props.stories[index].slug}`)
        }
        styleName="carousel"
      >
        {this.props.stories.map((story, index) => (
          <div key={`${index}-${story.id}`} styleName="story">
            <ResponsiveHeroImage
              story={story}
              aspectRatio={[16, 9]}
              defaultWidth={968}
              widths={[320, 640, 968]}
              styleName="hero"
            />
            <div styleName="details">
              <p styleName="section">{story.sections[0].name}</p>
              <Link href={`/${story.slug}`}>
                <h2>{story.headline}</h2>
              </Link>
              <p styleName="author">By {story["author-name"]} &middot; Foo</p>
            </div>
          </div>
        ))}
      </Carousel>
    );
  }
}

FullscreenSlider.propTypes = {
  stories: arrayOf(object)
};
