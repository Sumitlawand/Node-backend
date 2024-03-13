const mongodb = require('Mongodb');
const url = 'mongodb://127.0.0.1:27017'
const database = 'e-comm'
const client = new mongodb .MongoClient(url)



async function dbconnect(){

    let result = await client.connect();
    let db =  result.db(database)
    return db.collection("Product")
    // let response = await collection.find({name:'Sumit'}).toArray();
    // console.log(response)
}

// console.log(dbconnect())


module.exports= dbconnect;