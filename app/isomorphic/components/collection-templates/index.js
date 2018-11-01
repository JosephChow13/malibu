import { wrapCollectionLayout } from "@quintype/components";
import { FourColGrid } from "./four-col-grid";
import { FullscreenSlider } from "./fullscreen-slider";

export default {
  FourColGrid: wrapCollectionLayout(FourColGrid),
  FullImageSlider: wrapCollectionLayout(FullscreenSlider),
  defaultTemplate: wrapCollectionLayout(FourColGrid)
};
