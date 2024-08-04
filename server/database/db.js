const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI;

const connectdb = async ()=>{
    try {
       await mongoose.connect(URI) 
       console.log("Database Connected")
    } catch (error) {
        console.error("Database Connection Failed");
        process.exit(0);
    }
}

module.exports = connectdb;