

var Company = require('../models/company');
var mongoose = require('mongoose');
var config = require('config');
var fs  = require('fs');
var path = require('path');


// Get all data for loggedIn user
exports.getAll = async (req, res) => {
  try{
      const query = Company.find({});
      query.getFilter();
      const docs = await query.exec();
      res.status(200).json(docs);
  } 
  catch(err){
    res.status(500).send(err);
  }  
}

exports.update = async (req, res) => {
  try{
    console.log('inside the update the data')
    var query = {
        "CompanyName" : req.body.CompanyName
      };
  
    const doc = await Company.findOneAndUpdate(query, req.body, {
        new: true,
        upsert: true // Make this update into an upsert
    });
    var resultData = {
          "CompanyName":req.body.CompanyName,
          "status":"Success"
      }
      res.status(200).json(resultData)
  }
  catch(err){
    res.status(500).send(err);
  }
}

// Get all data for loggedIn user
exports.searchCompany = async (req, res) => {
  try{
      const query = Company.find(req.body);
      query.getFilter();
      const docs = await query.exec();
      res.status(200).json(docs);
  } 
  catch(err){
    res.status(500).send(err);
  }  
}

exports.home = (req,res) =>{ 
  res.send('Welcome to Smartclassify Server');
}

// Count all
exports.count = async (req, res) => {
  const count = await Company.count({});
  console.log('there are %d jungle adventures', count);
  console.log(count);
  res.json(count);
}





