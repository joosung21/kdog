var express = require('express')
var app = express()
var pug = require('pug')
app.set('views', './views')
app.set('view engine', 'pug')
app.locals.pretty = true
app.use('/', express.static('public'))

app.get('/', function (req, res) {
  res.render('room-setting')
})
app.get('/room-manage/', function (req, res) {
  res.render('room-setting')
})
app.get('/docs/', function (req, res) {
  res.render('docs/empty-page')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
