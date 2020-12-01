const express = require('express')
const app = express()
const port = 3001
const nameList = []

const staticDir = __dirname + '\\client\\'

app.use(express.static(staticDir))

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(clientDir))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('pages/index.ejs', {name: "bbba", nameList: nameList})
})

app.post('/savePerson', function (req, res) {

  let person = personModel.createPerson(req.body.name, req.body.email, req.body.age)

  dBModule.storeElement(person)

  res.render('pages/index.ejs', {name: req.body.name})
})


app.listen(port, () => console.log(`Example app listening on port ${port}`))