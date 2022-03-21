const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    likes: {type:Number, required: false,default:0},
    coverImage: {type:String, required: true},
    content:{type:String, required: true},
    user: {type: mongoose.Types.ObjectId, ref: 'user',required:true}
},{
    versionKey: false,
    timestamps: {type:String, required: true}
});

const Book = mongoose.model("book", bookSchema);

module.exports = Book;