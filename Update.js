const dbconnect= require('./Mongodb')


const update = async () =>{

    const database = await dbconnect()
    const result = await database.updateOne(
    {lastname:'Mane'}, {
        $set:{
            lastname: 'hegade',
    }}
    )
    if(result.acknowledged){
        console.log('data Updated successfully')
       }
}
update()