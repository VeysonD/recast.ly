class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDisplayedVideo: window.exampleVideoData[0], //this.props.searchYouTube[0],
      videos: window.exampleVideoData //this.props.searchYouTube
    };
  }

  componentDidMount () {
    this.getYouTubeVideos('Los Angeles');
  }

  getYouTubeVideos(query) {
    var options = {
      key: this.props.apiKey,
      q: query,
    };
    this.props.searchYouTube(options, (apiCall)=>
      this.setState({
        videos: apiCall,
        currentDisplayedVideo: apiCall[0]
      })
    );
  }

  setCurrentVideo (lastClickedVideo) {
    this.setState ({
      currentDisplayedVideo: lastClickedVideo
    });
  }

  render() {
    return (
      <div>
        <Nav searchYouTube={this.getYouTubeVideos.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentDisplayedVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList clickHandler={this.setCurrentVideo.bind(this)} videos={this.state.videos}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
