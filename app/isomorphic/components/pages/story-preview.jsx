const React = require("react");
const { StoryPage } = require("./story.jsx");

class StoryPagePreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.collectStoryData();
  }

  collectStoryData() {
    global.addEventListener("message", (event) => {
      if (event.data.story) {
        this.setState({story: event.data.story});
      }
    });
  }

  render() {
    if (!this.state.story) return <div></div>;
    return <StoryPage data={this.state}/>
  }
}

exports.StoryPagePreview = StoryPagePreview;