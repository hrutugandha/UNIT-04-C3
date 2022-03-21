const mongoose = require('mongoose')

/*Comment Model

body ( string, required)
timestamps (string, required)
*/
const commentSchema = mongoose.Schema({
    body: {type:String, required: true},
},{
    versionKey: false,
    timestamps: {type:String, required: true}
});

const Comment = mongoose.model('Comment',commentSchema);

modules.exports = Comment;