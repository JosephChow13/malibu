import React from "react";
import { Carousel } from "../../carousel";
import { arrayOf, object } from "prop-types";
import { Link, ResponsiveHeroImage } from "@quintype/components";
import "./fs-slider.m.css";

export function FullscreenSlider({ stories }) {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showArrows
      autoPlay
      emulateTouch
      infiniteLoop
      styleName="carousel"
    >
      {stories.map((story, index) => (
        <Link
          key={`${index}-${story.id}`}
          href={`/${story.slug}`}
          styleName="story"
        >
          <ResponsiveHeroImage
            story={story}
            aspectRatio={[16, 9]}
            defaultWidth={968}
            widths={[320, 640, 968]}
            styleName="hero"
          />
        </Link>
      ))}
    </Carousel>
  );
}

FullscreenSlider.propTypes = {
  stories: arrayOf(object)
};
