class App extends React.Component{

  constructor(props) {
    super(props);
    //console.log(props);

    this.state = {
      currentDisplayedVideo: window.exampleVideoData[0],
      videos: window.exampleVideoData
    };


  }
  setCurrentVideo (lastClickedVideo) {
    this.setState ({
      currentDisplayedVideo: lastClickedVideo
    })
  }


  render() {
    //console.log(window.exampleVideoData)
    return (
     <div>
        <Nav />
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

export default App;
