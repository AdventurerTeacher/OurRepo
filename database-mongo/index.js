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
// const authoSchema =new Schema({

//   email: {type: String,
//       required: true,
//       unique: true,
//       minlength: 3,
//   },
//   password:{type: String,
//       required: true,
//        minlength: 8
//   }
// });



// var AdvSchema3= new Schema({
//   phone : Number,
//   name : { type: String, required: true },
//   price :{ type: String, required: true},
//   email : String,
//   description:String,
//   place: String ,
//   subject: String ,
//   create_date:{ type: Date, default: Date.now }
// });
// const ADV3 = mongoose.model('ADV3', AdvSchema3);

// const Autho = mongoose.model('Autho', authoSchema);

//********************************************************* */



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

const Std = mongoose.model('Std', stdSchema);
module.exports.Std  = Std;

const Teacher = mongoose.model('Tech', TeacherSchema, 'Teacher');
module.exports.Teacher = Teacher;