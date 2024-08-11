const { Schema, model } = require('mongoose');

const feedbackSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    notes: {
        type: Schema.Types.ObjectId,
        ref: 'Notes'
    },
    feedback: 
    { 
        type: String, 
        required: true 
    },
}, { timestamps: true })


// create a model or a collection
const Feedback = new model('Feedback', feedbackSchema);


module.exports = Feedback;