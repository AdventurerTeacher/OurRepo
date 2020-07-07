var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/teachersDataBase');

var Schema= mongoose.Schema;
// connect data base and check the connection
var db = mongoose.connection;
db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});
// create autho schema contain informations of users
const authoSchema =new Schema({

  email: {type: String,
      required: true,
      unique: true,
      minlength: 3,
  },
  password:{type: String,
      required: true,
       minlength: 8
  }
});



var AdvSchema3= new Schema({
  phone : Number,
  name : { type: String, required: true },
  price :{ type: String, required: true},
  email : String,
  description:String,
  place: String ,
  subject: String ,
  create_date:{ type: Date, default: Date.now }
});
const ADV3 = mongoose.model('ADV3', AdvSchema3);

const Autho = mongoose.model('Autho', authoSchema);

// export's part
module.exports.ADV3  = ADV3;
// module.exports.Teacher = Teacher;
module.exports.Autho  = Autho;

// //select all from teachers
// var selectAllfromTeacher = function() {
// Teacher.find(function (err, data) {
//   if (err) return console.error(err);
//   console.log( data[0]._doc.name)

// })
// };

// // insert into autho schema
// var insertIntoAutho = function(instanse) {
//   // console.log(db.base.modelSchemas.Autho)
//     Autho.create(instanse, function (err, res) {
//           if (err) {
//             console.log('could not insert')
//             throw err
//           }
//           console.log('inserted account')
//           Autho.close()
//         })
// };
// // insert into Teacher schema
// var insertIntoTeacher = function(instanse) {
//   Teacher.create(instanse, function (err, res) {
//           if (err) {
//             console.log('could not insert')
//             throw err
//           }
//           console.log('inserted account')
//           Teacher.close()
//         })
// };



// module.exports.insertIntoAutho = insertIntoAutho;
// module.exports.insertIntoTeacher = insertIntoTeacher;
// // module.exports.selectAllfromTeacher = selectAllfromTeacher;
