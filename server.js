const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');
const app = express()

const connectDB = require('./server/database/connection');


dotenv.config({path:'config.env'})
const PORT = process.env.PORT||800

app.use(bodyparser.urlencoded({extended:true}))
app.use(morgan('tiny'));
//mongoDB connection:
connectDB();

app.set("view engine", "ejs")
//app.set("views", path.resolve(_dirname,"./crud_app"))

app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/css',express.static(path.resolve(__dirname,"assets/img")))
app.use('/css',express.static(path.resolve(__dirname,"assets/js")))

//load routers

app.use('/', require('./server/routes/router'))

app.listen(PORT, ()=>{
    console.log(`runningn at aport ${PORT}`)
})