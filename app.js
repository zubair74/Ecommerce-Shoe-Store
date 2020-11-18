const express = require('express')

const path = require('path')
const dotenv = require("dotenv");

const authRoute = require('./routes/auth.js')
const dataRouter = require('./routes/DataRoute')

const verify = require("./routes/veritoken");


const cors = require('cors')

bodyparser = require('body-parser')

const mongoose = require('mongoose')

const app = express();

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.use(cors())



app.use('/api/user',authRoute)
app.use(dataRouter);

dotenv.config();
mongoose.connect(process.env.DB_CONNECT, { dbName: 'test', useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("Connected to db")).catch(err => console.log(`Could not Connected to db ${process.env.DB_CONNECTION} `, err));


app.listen(process.env.PORT || 5001,()=>{
    console.log('the app is running');   
})