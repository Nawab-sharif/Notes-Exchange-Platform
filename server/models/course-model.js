const { Schema, model } = require('mongoose');

const courseSchema = new Schema({
    title: { type: String, required: true },
}, { timestamps: true })


// create a model or a collection
const Course = new model('Course', courseSchema);


module.exports = Course;