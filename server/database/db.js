const mongoose = require('mongoose');
const URI = 'mongodb+srv://sharifquraishihgh:Sharif1234@cluster0.vr9fxca.mongodb.net/notes-exchange?retryWrites=true&w=majority&appName=Cluster0'

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