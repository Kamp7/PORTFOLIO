const express =require('express');
const app= express();
const port=80;
var bodyParser = require('body-parser');
var path=require('path');
app.use(bodyParser.urlencoded());
//serving static files
app.use('/static',express.static('static'));
//set template engine
app.set('view engine','html');
const dotenv = require('dotenv').config()

const username=process.env.MONGO_USERNAME
const password=process.env.MONGO_PASSWORD

// app.set('views',path.join(__dirname,'template'));
// console.log(password);
const mongoose = require('mongoose');
const { log } = require('console');
main().catch(error => console.log(error));
main().then(()=>{console.log("db connected")});
const local='mongodb://127.0.0.1:27017/Contactdata'
async function main() {
  await mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.qmzdtld.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
}

var ContactSchema = new mongoose.Schema({
    Fname: String,
    Lname: String,
    Email: String,
    Comment: String
  });

  const Contact = mongoose.model('Contact', ContactSchema);


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.post("/",(req,res)=>{
  console.log(req.body);
 const myData=new Contact(req.body);
 myData.save().then(()=>{
    res.send('this item saved to the database');
 }).catch(()=>{
    res.status(400).send('item was not saved to the database');
 });
});

app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
});