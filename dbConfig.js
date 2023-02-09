const  mongoose = require('mongoose');

require('dotenv').config()
const MONGO= process.env.MONGO

mongoose.connect(MONGO);

const db = mongoose.connection
db.on("error",console.error.bind(console, "connection error: "));

db.once("open", ()=>{

    
    console.log("connect succfully");
});
