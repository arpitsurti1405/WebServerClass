const express = require('express');
//const conn = require('../models/mysql_connection');
const user = require('../models/user')
const app = express.Router();


app.get("/",(req,res) =>{
    console.log('Test the console.')
    user.getAll((err,data) => {
        console.log('Test getall Method')
        res.send(data);
    });
    console.log('Test after getAll method')
});


app.post("/",(req,res) =>{
    console.log('Test the console.')
    user.add({FirstName: "Steve", LastName: "Smith",Password: "test"},(err,data) => {
        console.log('Test getall Method')
        res.send(data);
    });
    console.log('Test after getAll method')
});

module.exports = app;
