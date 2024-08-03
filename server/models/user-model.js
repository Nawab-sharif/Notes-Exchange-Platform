const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config');


// This is a blue print of your registration input fields
const userSchema = new mongoose.Schema({
    role: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    contact: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    notes: {
        type: [Schema.Types.ObjectId],
        ref: 'Notes',
        required: false
    }
}, { timestamps: true });

// json web tokens(jwt)
userSchema.methods.generateToken = function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,

        },
            SECRET, { expiresIn: "30d" }
        );
    } catch (error) {
        console.error(error)
    }
}

// define the model or the collection name
const User = new mongoose.model('User', userSchema);

module.exports = User;