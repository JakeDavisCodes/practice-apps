require("dotenv").config();
const express = require("express");
const path = require("path");
const controller = require('./controller.js')
const morgan = require('morgan')

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
app.use(morgan('dev'))

app.get('/words', (req, res)=> {
  controller.get()
    .then(words => {
      res.status(200).json(words)
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    })
})

app.post('/words', (req, res) => {
  console.log(req.body)
  res.sendStatus(500);
})

app.put('/words', (req, res) => {
  console.log(req.body)
  res.sendStatus(500);
})

app.listen(1128);
console.log(`Listening at http://localhost:1128`);
