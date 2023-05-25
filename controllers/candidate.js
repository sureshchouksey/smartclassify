

var Candidate = require('../models/candidate');
var mongoose = require('mongoose');
var config = require('config');
var fs  = require('fs');
var path = require('path');






// Get all data for loggedIn user
exports.getAll = (req, res) => {
  try{
  } 
  catch(err){
    loggerinfo.error('Get Device Service: Internal server error',err);
    res.status(500).send(err);
  }  
}

exports.home = (req,res) =>{ 
  res.send('Welcome to Smartclassify Server');
}

// Count all
exports.count = (req, res) => {
  Candidate.count((err, count) => {
    if (err) { return loggererror.info(err); }
    res.json(count);
  });
}

exports.update = async (req, res) => {
    console.log('inside the update the data')
    var query = {
        "CandidateName" : req.body.CandidateName
      };

    const doc = await Candidate.findOneAndUpdate(query, req.body, {
        new: true,
        upsert: true // Make this update into an upsert
    });

    var resultData = {
        "CandidateName":req.body.CandidateName,
        "status":"Success"
    }
    res.status(200).json(resultData)
    
  }





