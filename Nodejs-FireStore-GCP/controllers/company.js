const Firestore = require('@google-cloud/firestore');
const fs = require('fs');

const db = new Firestore({
  projectId: 'smartclassify-387007',
  keyFilename: 'smartclassify-387007-06c42ac826f2.json',
});

exports.update = async(req,res)=>{
    const docRef = db.collection('users').doc('alovelace');

    await docRef.set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
    });
    res.send("istepup add training");
}

exports.count = async(req,res)=>{
    const collectionRef = db.collection('companies');
    const snapshot = await collectionRef.count().get();
    console.log(snapshot.data().count);
    res.send(`smartclassify compnies count ${snapshot.data().count}`);
}


exports.getAll = async(req,res)=>{
    console.log('readData');
    let result =[];
    const snapshot = await db.collection('companies').get();
    snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
        result.push(doc.data());
    });
    res.send(result);
}

exports.searchByCompanyName = async(req,res)=>{
    console.log(req.body);
    let result =[];
    const companyRef = db.collection('companies');
    const snapshot = await companyRef.where('CompanyName', '==', req.body.CompanyName).get();
    if (snapshot.empty) {
        console.log('No matching documents.');
        return;
    }
    snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        result.push(doc.data());
    });
    res.send(result);
}

exports.searchByLocation = async(req,res)=>{
    console.log(req.body);
    let result =[];
    const companyRef = db.collection('companies');
    const snapshot = await companyRef.where('Location', 'in', req.body.Location).get();
    if (snapshot.empty) {
        console.log('No matching documents.');
        res.send('No matching documents.');
    }
    snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        result.push(doc.data());
    });
    res.send(result);
}