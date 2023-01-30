const express = require('express')
const app = express();

const getRoutes = require('./routers/getHandler');
const bodyParser = require('body-parser');
//const jsonParser = bodyParser.json()
//this is bascially an applicatiion setup


//To parse json data
app.use(bodyParser.json())

app.use(express.json())
//To parse URL encoded data
//app.use(bodyParser.urlencoded({ extended: false }))


app.use(getRoutes);
//app.use("")
app.listen(3000);



