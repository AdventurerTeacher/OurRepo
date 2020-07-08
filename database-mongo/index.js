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
const TeacherSchema =new Schema({

  email: {type: String,
      required: true,
      unique: true,
      minlength: 3,
  },
  password:{type: String,
      required: true,
       minlength: 8
  },
  phone : Number,
  name : { type: String, required: true },
  place: String,
  major: String ,
  courses: [{price :{ type: String, required: true},
    description:String,
    subject: String ,
    create_date:{ type: Date, default: Date.now }
  }]
});



// var AdvSchema3= new Schema({
//   price :{ type: String, required: true},
//   description:String,
//   subject: String ,
//   create_date:{ type: Date, default: Date.now }
// });


var stdSchema = new Schema({
  name : { type: String, required: true },
  email: {type: String,
    required: true,
    unique: true,
    minlength: 3,
},
password:{type: String,
    required: true,
     minlength: 8
},
 teachers : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' }]
})

// const ADV3 = mongoose.model('ADV3', AdvSchema3);

const Teacher = mongoose.model('Teacher', TeacherSchema, 'Teacher');

const Std = mongoose.model('Std', stdSchema);

// export's part
// module.exports.ADV3  = ADV3;
// module.exports.Teacher = Teacher;

module.exports.Teacher = Teacher;

module.exports.Std  = Std;
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
