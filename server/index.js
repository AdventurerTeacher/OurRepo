

var express = require('express');
var bodyParser = require('body-parser');
var handlers = require('./handlres.js')
var app = express();
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/teachersDataBase');
// mongoose.Promise = global.Promise;
//  var items = require('../database-mongo');
//  var Std = items.Std;
//var Teacher =items.Teacher;
//var session = require('express-session')

app.post('/SignupS', function (req, res) {
  console.log(req)
  var user = {
     Name: req.body.name,
     Email: req.body.email,
     Password: req.body.password
 };
 
 var UserReg = mongoose.model('Std', StdSchema);
 UserReg.create(user, function(err, newUser) {
    if(err)
    return res.send('Error!');
    ;
    //req.session.user = email;
    return res.send('Logged In!');
 });
});


var cors = require('cors')

//app.use(cors())


var port = 9000
app.listen(port, function() {
  console.log('listening on port 9000!');
});


//  **********************************************************************


// app.use(express.session({
//     secret: 'keyboard cat',
//     saveUninitialized: false, // don't create session until something stored
//     resave: false, //don't save session if unmodified
//     store: new MongoStore({
//         url: 'mongodb://localhost/teachersDataBase',
//         touchAfter: 24 * 3600 // time period in seconds
//     })
// }));

// app.get('/', function(req, res, next) {
//   dd(res)
//   if (req.session.views) {
//     req.session.views++
//     res.setHeader('Content-Type', 'Application/json')
//     res.write(reg.newUser)
//     // res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
//     res.end()
//   } else {
//     req.session.views = 1
//     res.end('welcome to the session demo. refresh!')
//   }
// })


