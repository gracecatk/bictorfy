// controllers/mainController.js
//const db = require('../models/index');

//exports.getHome = (req, res) => {
  // Render home page with songs
//};

//exports.addSong = (req, res) => {
  // Handle adding a new song
//};
//const fetchMyData = async () => {
  //const response = await fetch('https://accounts.spotify.com/authorize?client_id=df91343a82f94f9180f4ca27942cdb95&response_type=code&redirext_uri=http://localhost:3000&//scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state');
  //const data = await response.json();
  //const loginNames = data.map(item => item.login);

  // After fetching, compile and render the template
  //const templateSource = document.getElementById('loginNames-template').innerHTML;
  //const template = Handlebars.compile(templateSource);
  //const html = template({ loginNames });
  //document.getElementById('template-container').innerHTML = html;
//}

//fetchMyData();
window.onSpotifyIframeApiReady = (IFrameAPI) => {
  const element = document.getElementById('embed-iframe');
  const options = {
      uri: 'spotify:episode:7makk4oTQel546B0PZlDM5'
    };
  const callback = (EmbedController) => {};
  IFrameAPI.createController(element, options, callback);
};