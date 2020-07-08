

var express = require('express');
var bodyParser = require('body-parser');
var handlers = require('./handlres.js')
var app = express();
var session = require('express-session')
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../react-client/dist'));
app.post('/signup', handlers.signup);
app.post('/login', handlers.login)
app.get('/login', handlers.login)
app.get('/ret', handlers.showTeachers)
app.post('/mainForm', handlers.addTeacher)
app.get('/mainForm', handlers.addTeacher)
app.get('/findOne', handlers.showSpecificTeacher)
app.post('/findOne', handlers.showSpecificTeacher)

app.post('/sendemail', handlers.sendEmail)
app.post('/logout', handlers.logout)
app.get('/', (req, res) => {
  sess=req.session;
  res.status(200).send('Success');
});
var port = 9000
app.listen(port, function() {
  console.log('listening on port 9000!');
});


//  **********************************************************************


app.use(express.session({
    secret: 'keyboard cat',
    saveUninitialized: false, // don't create session until something stored
    resave: false, //don't save session if unmodified
    store: new MongoStore({
        url: 'mongodb://localhost/teachersDataBase',
        touchAfter: 24 * 3600 // time period in seconds
    })
}));

app.get('/', function(req, res, next) {
  dd(res)
  if (req.session.views) {
    req.session.views++
    res.setHeader('Content-Type', 'Application/json')
    res.write(reg.newUser)
    // res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
    res.end()
  } else {
    req.session.views = 1
    res.end('welcome to the session demo. refresh!')
  }
})