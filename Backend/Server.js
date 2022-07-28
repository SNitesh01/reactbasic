const express = require('express')
const connectDb = require('./src/Db/dbCon')
const dotenv = require('dotenv')
const cors = require('cors');
const router = require('./src/Routes/userRoutes');

const app= express();

dotenv.config();
connectDb();
app.use(cors())




app.use(express.json());
app.use(express.urlencoded({ extended: true}));  //for accepting form data



app.use(router)


app.get('/' , (req, res) =>{
    res.send("server runing")
    res.end();

})

app.listen(8890, console.log("server started"))