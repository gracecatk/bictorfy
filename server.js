// app.js
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const hbs = require('hbs');
const dotenv = require('dotenv');
const db = require('./models/index');
const mainController = require('./controllers/mainController');
const authController = require('./controllers/authController');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }));

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Routes
app.get('/', mainController.getHome);
app.post('/add-song', mainController.addSong);

app.get('/login', authController.getLogin);
app.post('/login', authController.postLogin);
app.get('/signup', authController.getSignup);
app.post('/signup', authController.postSignup);
app.get('/logout', authController.logout);

// Database synchronization
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
