const express = require('express');
const mongoose = require('mongoose');
const app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://goRush:gsb2332065@cluster0-shard-00-00.rikek.mongodb.net:27017,cluster0-shard-00-01.rikek.mongodb.net:27017,cluster0-shard-00-02.rikek.mongodb.net:27017/gorush?ssl=true&replicaSet=atlas-tr9az4-shard-0&authSource=admin&retryWrites=true&w=majority";
var objectID = require('mongodb').ObjectID;
const ejs = require('ejs');
const UserList = {};
const StandardMOHtestList = {};
const exp_MohOrderList  = {};

app.set('view engine', 'ejs');

mongoose.connect("mongodb://goRush:gsb2332065@cluster0-shard-00-00.rikek.mongodb.net:27017,cluster0-shard-00-01.rikek.mongodb.net:27017,cluster0-shard-00-02.rikek.mongodb.net:27017/gorush?ssl=true&replicaSet=atlas-tr9az4-shard-0&authSource=admin&retryWrites=true&w=majority");

const usersSchema = {
    name: String,
    bruhims: String,
    passport: String,
    icNumber: String,
    kampong: String,
    jalan: String,
    simpang: String,
    house_Number: String,
    contact_1: String,
    email: String,
    qo: String,
    radioTOD: String,
    BNHC: String,
    TUHC: String,
    TEHC: String,
    BHC: String,
    radioDistrict: String,
    pm: String,
    re: String,
    radioNOTI: String,
    radioDURATION: String,
    dateSubmit: String,
    ordertaken: String
    
}

const User = mongoose.model('User', usersSchema);

app.get('/', (req, res) => {
    User.find({}, function(err, users) {
        res.render('index', {
            UserList:  users
        })
        console.log(users)
    })
})

app.post('/', (req,res) =>{
    User.findOneAndUpdate({bruhims: req.body.bruhims},{$set: {ordertaken: "YES"}}, (err,users)=>{
        if (err) throw err
        else res.render('index')
    })
})

/*
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("gorush");
    var myquery = {icNumber: req.body.icNumber	};
    var newvalues = { $set: {ordertaken: req.body.ot} };
    dbo.collection("users").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
      db.close();
    });
  });
*/



app.use(express.urlencoded({extended:true}));

app.listen(3000, function() {
    console.log('server is running 3000');
})