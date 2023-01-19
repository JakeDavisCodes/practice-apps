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

app.get('/words/search', (req, res) => {
  console.log('LOOK', req.body)
  controller.search(req.body.search)
    .then(words => {
      console.log(words)
      res.status(200).json(words);
    })
    .catch(err => {
      console.error(err)
      res.sendStatus(500);
    })
})

app.post('/words', (req, res) => {
  controller.post(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch(err => {
      console.error(err)
      res.sendStatus(500);
    })
})

app.put('/words', (req, res) => {
  controller.put(req.body.id, req.body.definition)
    .then(() => {
      res.sendStatus(204)
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    })
})

app.delete('/words', (req, res) => {
  console.log(req.body)
  controller.delete(req.body.id)
    .then(() => {
      res.sendStatus(204)
    })
    .catch(err => {
      console.error(err)
      res.sendStatus(500)
    })
})

app.delete('/words/all', (req, res) => {
  controller.clear()
    .then(() => {
      res.sendStatus(204)
    })
    .catch(err => {
      console.error(err)
      res.sendStatus(500)
    })
})

app.listen(1128);
console.log(`Listening at http://localhost:1128`);
