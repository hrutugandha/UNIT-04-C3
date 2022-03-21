const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName: {type:String, required, minlength:3, maxlength:30,required: true},
    lastName: {type:String, required, minlength:3, maxlength: 30,required: true},
    age: {type:Number, required: true, minlength:1, maxlength: 150},
    email: {type:String, required: true,  unique:true},
    profileImages: {profileImages}
},{
    versionKey: false,
    timestamps: {type:String, required: true}
})

const User = mongoose.model("user", userSchema);

module.exports = User;