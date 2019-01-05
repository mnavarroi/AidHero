require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const cors         = require('cors');


mongoose
    .connect(process.env.DB, {useNewUrlParser: true})
    .then(x => {
    console.log(`Conectado a Mongo! Nombre de la base de datos: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error al conectarse con Mongo', err)
  });

const corsOptions = {
  origin: true,
    'credentials': true,
};

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();
app.use(cors(corsOptions));

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));



// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';


const index = require('./routes/index');
const auth = require('./routes/auth');
const comments = require('./routes/comments');
const organizations = require ('./routes/organizations');
const posts = require ('./routes/posts');
const users = require ('./routes/users');


app.use('/', index);
app.use('/api/auth',auth);
app.use('/api/comments', comments);
app.use('/api/organizations', organizations);
app.use('/api/posts', posts);
app.use('/api/users', users);

app.all('/*', (req,res) => {
  res.sendFile(__dirname + '/public/index.html');
});

module.exports = app;
