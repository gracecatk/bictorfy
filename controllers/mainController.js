// controllers/mainController.js
//const db = require('../models/index');

//exports.getHome = (req, res) => {
  // Render home page with songs
//};

//exports.addSong = (req, res) => {
  // Handle adding a new song
//};
const fetchMyData = async () => {
  const response = await fetch('https://api.github.com/users');
  const data = await response.json();
  const loginNames = data.map(item => item.login);

  // After fetching, compile and render the template
  const templateSource = document.getElementById('loginNames-template').innerHTML;
  const template = Handlebars.compile(templateSource);
  const html = template({ loginNames });
  document.getElementById('template-container').innerHTML = html;
}

fetchMyData();