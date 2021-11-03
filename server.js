const express = require('express');
const mongoose = require('mongoose');
const app = express();
var mongo = require('mongodb').MongoClient;
var objectID = require('mongodb').ObjectID;
const ejs = require('ejs');
const UserList = {};
const StandardMOHtestList = {};
const exp_MohOrderList  = {};

app.set('view engine', 'ejs');

mongoose.connect('mongodb://goRush:gsb2332065@cluster0-shard-00-00.rikek.mongodb.net:27017,cluster0-shard-00-01.rikek.mongodb.net:27017,cluster0-shard-00-02.rikek.mongodb.net:27017/gorush?ssl=true&replicaSet=atlas-tr9az4-shard-0&authSource=admin&retryWrites=true&w=majority');


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

const std_mohordersSchema = {
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

const Std_MohOrder = mongoose.model('Std_MohOrder', std_mohordersSchema);

app.get('/StdMOH', (req, res) => {
    Std_MohOrder.find({}, function(err, std_mohorders) {
        res.render('moh_std', {
            Std_MohOrderList:  std_mohorders
        })
        console.log(std_mohorders)
    })
})

const exp_mohordersSchema = {
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

const exp_MohOrder = mongoose.model('exp_MohOrder', exp_mohordersSchema);

app.get('/ExpMOH', (req, res) => {
    exp_MohOrder.find({}, function(err, exp_mohorders) {
        res.render('moh_exp', {
            exp_MohOrderList:  exp_mohorders
        })
        console.log(exp_mohorders)
    })
})

const ime_mohordersSchema = {
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

const ime_MohOrder = mongoose.model('ime_MohOrder', ime_mohordersSchema);

app.get('/ImeMOH', (req, res) => {
    ime_MohOrder.find({}, function(err, ime_mohorders) {
        res.render('moh_ime', {
            ime_MohOrderList:  ime_mohorders
        })
        console.log(ime_mohorders)
    })
})

const std_jpmcordersSchema = {
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

const std_JpmcOrder = mongoose.model('std_JpmcOrder', std_jpmcordersSchema);

app.get('/stdjpmc', (req, res) => {
    std_JpmcOrder.find({}, function(err, std_jpmcorders) {
        res.render('jpmc_std', {
            std_JpmcOrderList:  std_jpmcorders
        })
        console.log(std_jpmcorders)
    })
})

const exp_jpmcordersSchema = {
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

const exp_JpmcOrder = mongoose.model('exp_JpmcOrder', exp_jpmcordersSchema);

app.get('/expjpmc', (req, res) => {
    exp_JpmcOrder.find({}, function(err, exp_jpmcorders) {
        res.render('jpmc_exp', {
            exp_JpmcOrderList:  exp_jpmcorders
        })
        console.log(exp_jpmcorders)
    })
})

const std_panagaordersSchema = {
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

const std_PanagaOrders = mongoose.model('std_PanagaOrders', std_panagaordersSchema);

app.get('/stdphc', (req, res) => {
    std_PanagaOrders.find({}, function(err, std_panagaorders) {
        res.render('phc_std', {
            std_PanagaOrdersList:  std_panagaorders
        })
        console.log(std_panagaorders)
    })
})


app.listen(4000, function() {
    console.log('server is running');
})