const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('Hello Vikash!!!How are you');
});

const port=process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listining on  Port ${port}..`));
