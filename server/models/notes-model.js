const { Schema, model } = require('mongoose');

const notesSchema = new Schema({
    course: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    },
    title: { 
        type: String, 
        required: true, 
        unique: true 
    },
    price: { 
        type: String, 
        required: true },
    previewUrl: { 
        type: String, 
        required: true },
    viewUrl: { 
        type: String, 
        required: true 
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    isApproved: { 
        type: Boolean, 
        default: false },
}, { timestamps: true })

// create a model or a collection
const Notes = new model('Notes', notesSchema);
module.exports = Notes;