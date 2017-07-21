var searchYouTube = (options, callback) => {
  // TODO
  //console.log(callback);
  //console.log(options);
  //debugger;
  $.get( 'https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: options.key,
    q: options.query,
    maxResults: options.max || 5,
    type: 'video',
    videoEmbeddable: 'true'
  }).done(function(data) {
    console.log('success');
    if (callback) {
      callback(data.items);
    }
  }).fail(function(response) {
    console.log(response);
  });
};

window.searchYouTube = searchYouTube;

// As you've done with other modules, make searchYouTube available for consumption and pass it as a prop to your app
// Replace exampleVideoData from the initial state of App with empty initial values, appropriate to the type of values it is expecting
// Utilize the componentDidMount lifecycle hook to render your app with live videos returned from searchYouTube
// Remove the x from the pending tests in AppSpec.jsx, and make sure all the App tests are passing. You can open the tests with npm test

//success method: console.log('Data was sucess''data')
//failure method
