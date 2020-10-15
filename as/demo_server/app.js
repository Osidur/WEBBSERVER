const express = require('express')
const dBModule = require('./dBModule')
const personModel = require('./PersonModel')
const messageModel = require('./MessageModel')
const app = express()
const port = 3000
const clientDir = __dirname + "\\client\\"
const nameList = ['a', 'b', 'c']

app.use(express.static(clientDir))

app.set('viewengine', 'ejs')

app.get('/', (request, response) => {
  response.render("pages/index.ejs", {nameList: nameList})
})

personModel.createPerson('apa','baa','1000')

/*
app.post('/', (request, response) => {
  let person = personModel.()
  response.redirect('/')
})
*/

app.get('/messages', async (req, res) => {
  let messages = await messegaModel.getAllMessages()
  response.render("pages/messegas.ejs", {names: nameList, products: prodList})
})

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
}) 