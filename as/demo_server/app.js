const express = require('express')
const dBModule = require('./dBModule')
const personModel = require('./PersonModel');
const app = express()
const port = 3000

const clientDir = __dirname + "\\client\\"

app.set('viewengine ejs');

app.use(express.static(clientDir))
app.use(express.json())
app.use(express.urlencoded())

app.get('/', function(req, res) {
  res.sendFile(clientDir + "index.ejs")
})

app.get('/stilen', function(req, res) {
  res.sendFile(clientDir + "stule.css")
})

app.get('/jesus', function(req, res) {
  res.sendFile(clientDir + "download.jpg")
})

app.post('/', function(req, res) {
  let person = personModel()
  res.redirect('/')
})

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
}) 