const mongoose = require('mongoose');

// Create a Schema
// Scheme just describe your data to post

const PostSchema = mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    date: {
        type:Date,
        default: Date.now
    }
});

// This model is whats going to show on the mongoDB 
module.exports = mongoose.model('Posts', PostSchema);