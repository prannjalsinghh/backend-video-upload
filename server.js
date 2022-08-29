const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 4000;
const generateUploadURL = require('./s3')
const cors= require('cors')

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('front'))

mongoose.connect('mongodb+srv://pranjalsingh:Pranshu2001@cluster0.rdeev9c.mongodb.net/?retryWrites=true&w=majority',()=>console.log('connected'))

app.get('/s3Url', async (req, res) => {
  const url = await generateUploadURL()
  res.send({url})
})
app.use('/',require('./Routes/appRouter'))


app.listen(PORT,()=>{
    console.log(`server is listening at port ${PORT}`)
})