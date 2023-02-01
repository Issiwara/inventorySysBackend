const  mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Thisura:Se100%40$20Thisura@cluster0.mwiye0n.mongodb.net/test");
const db = mongoose.connection
db.on("error",console.error.bind(console, "connection error: "));
db.once("open", ()=>{
    console.log("connect succfully");
});