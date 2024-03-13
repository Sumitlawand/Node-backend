const mongodb = require('Mongodb');
const dbconnect = require('./Mongodb');



const Delete =async()=>{

    const datadelete = await dbconnect()
    result = await datadelete.deleteMany({
        name: 'sumit'
    })
    if(result.acknowledged){
        console.log('data Deleted successfully')
       }
}

Delete()