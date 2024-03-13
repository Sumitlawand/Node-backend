const dbconnect= require('./Mongodb')



const insert = async() =>{
   const db =await dbconnect()
   const result =await db.insertOne({
    name:'sumit',lastname:'jadhav',place:'Amravti'
   })
   if(result.acknowledged){
    console.log('data inserted successfully')
   }
}

insert()

