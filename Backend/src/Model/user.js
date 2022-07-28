const mongoose = require('mongoose')

let schma =  mongoose.Schema({
    name:{type:String, minlength:3, maxlength:200, require},
    email:{type:String,},
    Consumernumber:{type:Number },
    photo:{type:Object, default:"https://picsum.photos/200/300/?blur"},
    cloudinary_id: {
        type: String,
      },
    adharno:{type:Number},
    address:{type:String},
    Totalbill:{type:Number}

})

module.exports = new mongoose.model('user', schma)