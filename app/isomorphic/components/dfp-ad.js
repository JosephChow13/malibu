/* eslint-disable object-shorthand */
import { createDfpAdComponent } from "@quintype/components";
import get from "lodash/get";
import React from "react";

export const CONFIG = {
  "homepage-banner": { adUnit: "Rio_Story_LB1", sizes: [[728, 90]] }
};

const DfpAdBase = createDfpAdComponent({
  defaultNetworkID: "60988533",
  config: CONFIG,
  targeting: function(state) {
    const params = {};

    if (
      get(state, ["qt", "pageType"]) === "story-page" &&
      get(state, ["qt", "data", "story", "metadata", "sponsored-by"])
    ) {
      params.sponsor = get(state, ["qt", "data", "story", "metadata", "sponsored-by"]);
      return params.sponsor;
    }

    return params;
  }
});

export class DfpAd extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showAds: false };
  }

  componentDidMount() {
    global.requestIdleCallback(() => global.setTimeout(() => this.setState({ showAds: true }), 2500), {
      timeout: 2000
    });
  }

  render() {
    if (this.state.showAds) {
      return <DfpAdBase {...this.props} />;
    } else {
      return null;
    }
  }
}
