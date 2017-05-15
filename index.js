'use strict'

import express from 'express'
let app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('Hello World!!')
})

app.listen(3100)