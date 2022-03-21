const mongoose = require('mongoose')

const publicationSchema = mongoose.Schema({
    body: {type:String, required: true},
},{
    versionKey: false,
    timestamps: {type:String, required: true}
});

const Publication = mongoose.model('publication',publicationSchema);

modules.exports = Publication;