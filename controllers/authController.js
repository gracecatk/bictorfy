// controllers/authController.js
const db = require('../models/index');
const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=df91343a82f94f9180f4ca27942cdb95&response_type=code&redirext_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"


exports.getLogin = (req, res) => {
  // Redirect the user to the Spotify authorization URL
  res.redirect(AUTH_URL);
};

exports.postLogin = (req, res) => {
  // Handle login logic
  const { username, password } = req.body;
  // Implement your login authentication logic with the provided credentials
  // Redirect the user to the appropriate page based on the authentication result
};

exports.getSignup = (req, res) => {
  // Render signup page
};

exports.postSignup = (req, res) => {
  // Handle signup logic
};

exports.logout = (req, res) => {
  // Handle logout logic
};
