const express=require('express');
const app=express();
const port=3000;


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/employees',require('./controller/employeesController'))
app.listen(port,() => console.log('Server Started' + port+'!'))