var express = require('express')
var app = express()
var pug = require('pug')
app.set('views', './views')
app.set('view engine', 'pug')
app.locals.pretty = true
app.use('/', express.static('public'))

app.get('/', function (req, res){res.render('room-setting')})
app.get('/room-manage/', function (req, res){res.render('room-setting')})

// DOCS
app.get('/docs/', function (req, res){res.render('docs/empty-page')})
app.get('/docs/empty-page', function (req, res){res.render('docs/empty-page')})
app.get('/docs/empty-page2', function (req, res){res.render('docs/empty-page2')})
app.get('/docs/layout', function (req, res){res.render('docs/layout')})
app.get('/docs/colors', function (req, res){res.render('docs/colors')})
app.get('/docs/typography', function (req, res){res.render('docs/typography')})
app.get('/docs/form-controls', function (req, res){res.render('docs/form-controls')})



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
