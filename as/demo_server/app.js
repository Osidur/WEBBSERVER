const express = require('express')
const dBModule = require('./dBModule')
const personModel = require('./PersonModel');
const app = express()
const port = 3000

const clientDir = __dirname + "\\client\\"

const nameList = ['a', 'b', 'c']

app.set('viewengine', 'ejs');

app.use(express.static(clientDir))
app.use(express.json())
app.use(express.urlencoded())

app.get('/', function(request, response) {
  res.sendFile(clientDir + "index.ejs")
})

app.get('/stilen', function(request, response) {
  res.sendFile(clientDir + "stule.css")
})

app.get('/jesus', function(request, response) {
  res.sendFile(clientDir + "download.jpg")
})

app.post('/', function(request, response) {
  let person = personModel()
  res.redirect('/')
})

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
}) 