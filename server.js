const express=require('express');
const app=express();


app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log('Server is running on port 3030');
    } catch (error) {
        console.log(error);
    }
    
})