const Firestore = require('@google-cloud/firestore');
const fs = require('fs');

const db = new Firestore({
  projectId: 'smartclassify-387007',
  keyFilename: 'smartclassify-387007-06c42ac826f2.json',
});

exports.addData = async(req,res)=>{
    const docRef = db.collection('users').doc('alovelace');

    await docRef.set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
    });
    res.send("istepup add training");
}

exports.changeData = async(req,res)=>{
    // First I want to read the file
    fs.readFile(`companies.json`, function read(err, data) {
        if (err) {
            throw err;
        }
        const content = JSON.parse(data);
        console.log('content')
        // Invoke the next step here however you like
        //processFile(content);   // Or put the next step in a function and invoke it
        let obj = {};

        content.forEach((element) => {
            let docId = element._id.$oid;
            delete element._id;
            delete element.__v;
            element["__collections__"] = {};
            obj[docId] = element;
        });

        fs.writeFile(`companies-firestore.json`, JSON.stringify(obj), 'utf8', (err) => {
            if (err) throw err;
            console.log(`${collection} JSON Converted`);
        });
    });
    res.send("changeData");
}

exports.migrateData = async(req,res)=>{
    // First I want to read the file
    /*console.log('inside the migrateData')
    fs.readFile(`companies.json`, function read(err, data) {
        if (err) {
            throw err;
        }
        const content = JSON.parse(data);
        let obj = {};

        content.forEach((element) => {
            let docId = element._id.$oid;
            delete element._id;
            delete element.__v;
            element["__collections__"] = {};
            obj[docId] = element;
        });

        fs.writeFile(`./firestore-import-data/${collection}.json`, JSON.stringify(obj), 'utf8', (err) => {
            if (err) throw err;
            console.log(`${collection} JSON Converted`);
        });
    });*/
    res.send("migrate data");
}

exports.readData = async(req,res)=>{
    console.log('readData');
    const snapshot = await db.collection('users').get();
    snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
    });
    res.send("istepup cloudfirestore training");
}