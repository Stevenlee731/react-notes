const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(express.static('server/public'))
app.use(bodyParser.json())

const notes = [
  {
    text: 'This is the first note'
  },
  {
    text: 'This is the second note'
  },
  {
    text: 'This is the third note'
  },
  {
    text: 'This is the fourth note'
  }
]

app.get('/notes', (req, res) => {
  res.json(notes)
})

app.post('/notes', (req, res) => {
  const note = req.body
  notes.push(note)
  res.status(201).json(note)
})

app.listen(3000, () => {
  console.log('listening on 3000')
})
