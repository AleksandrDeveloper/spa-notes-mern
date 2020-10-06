const express = require("express");
const mongoose = require('mongoose');
const path = require("path");
const cors  = require('cors')
const config = require("./config");
const bodyParser = require('body-parser')
const Db = require('./utils/database')

const app = express();


app.use(cors({ origin: '*' }));

app.use(bodyParser.json())

app.get("/", async (req, res) => {
  const data = await Db.getAllNotesFromDb()
  res.send(data);
});

app.post('/notes',async (req,res)=>{
  console.log(req);
  const {title,text,color,date} = req.body

  const data = await Db.createNewNotes({
    title,
    text,
    date,
    color,
  })
  res.send(data);
})

app.delete('/notes/:id',async (req,res)=>{
  const data = await Db.deleteNote()
  res.send(data);
})



// Start app 
async function Start() {
  try {
    app.listen(config.PORT, (err) =>console.log(err || `Server is start ${config.PORT}`));
    await mongoose.connect(config.MongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log('Success');
  } catch (e) {
    console.log(e);
  }
}

Start();
