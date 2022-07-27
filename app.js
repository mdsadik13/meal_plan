const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cookieParser());

const user = require('./routes/user');
const foodItem= require('./routes/foodItem');
const createMeal = require('./routes/meal')


app.use("/api" , createMeal);
app.use("/api" , foodItem)
app.use("/api" , user)


module.exports=app;