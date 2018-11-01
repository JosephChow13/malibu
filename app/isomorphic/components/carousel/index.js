import "./carousel.m.css";
import React from "react";
import { Carousel } from "react-responsive-carousel";

export default function DefaultCarousel(props) {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showArrows
      autoPlay
      emulateTouch
      infiniteLoop
      {...props}
    />
  );
}
