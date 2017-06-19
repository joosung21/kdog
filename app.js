var express = require('express')
var app = express()
var pug = require('pug')
app.set('views', './views')
app.set('view engine', 'pug')
// app.locals.pretty = true
app.use('/', express.static('public'))
app.use('/assets/', express.static('assets'))

app.get('/', function (req, res){res.render('room-setting')})

app.get('/login', function (req, res){res.render('login')})
app.get('/join-01', function (req, res){res.render('join-01')})
app.get('/join-02', function (req, res){res.render('join-02')})
app.get('/join-03', function (req, res){res.render('join-03')})

app.get('/room-manage/', function (req, res){res.render('room-setting')})

app.get('/setting/company', function (req, res){res.render('setting-company')})
app.get('/setting/step', function (req, res){res.render('setting-step')})
app.get('/setting/step/edit', function (req, res){res.render('setting-step-edit')})

// DOCS
app.get('/docs/', function (req, res){res.render('docs/empty-page')})
app.get('/docs/empty-page', function (req, res){res.render('docs/empty-page')})
app.get('/docs/empty-page2', function (req, res){res.render('docs/empty-page2')})
app.get('/docs/layout', function (req, res){res.render('docs/layout')})
app.get('/docs/colors', function (req, res){res.render('docs/colors')})
app.get('/docs/typography', function (req, res){res.render('docs/typography')})
app.get('/docs/elements', function (req, res){res.render('docs/elements')})
app.get('/docs/buttons', function (req, res){res.render('docs/buttons')})
app.get('/docs/list-table', function (req, res){res.render('docs/list-table')})
app.get('/docs/form-controls', function (req, res){res.render('docs/form-controls')})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
