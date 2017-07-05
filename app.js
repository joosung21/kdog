var express = require('express')
var app = express()
var pug = require('pug')
app.set('views', './views')
app.set('view engine', 'pug')
// app.locals.pretty = true
app.use('/', express.static('public'))
app.use('/assets/', express.static('assets'))
// app.use('/node_modules/', express.static('node_modules'))

app.get('/', function (req, res){res.render('today-checkin')})

app.get('/login', function (req, res){res.render('login')})
app.get('/join-01', function (req, res){res.render('join-01')})
app.get('/join-02', function (req, res){res.render('join-02')})
app.get('/join-03', function (req, res){res.render('join-03')})

app.get('/start', function (req, res){res.render('start')})

app.get('/today/checkin', function (req, res){res.render('today-checkin')})
app.get('/today/reservation', function (req, res){res.render('today-reservation')})
app.get('/today/clean', function (req, res){res.render('today-clean')})

app.get('/room-chart', function (req, res){res.render('room-chart')})

app.get('/room-manage', function (req, res){res.render('room-setting')})
app.get('/room-manage/reorder', function (req, res){res.render('room-setting-reorder')})
app.get('/room-manage/detail', function (req, res){res.render('room-setting-detail')})

app.get('/sales-info/property', function (req, res){res.render('sales-info-property')})
app.get('/sales-info/rooms', function (req, res){res.render('sales-info-rooms')})

app.get('/payment/pg', function (req, res){res.render('payment-pg')})
app.get('/payment/gds', function (req, res){res.render('payment-gds')})
app.get('/payment/transfer', function (req, res){res.render('payment-transfer')})
app.get('/payment/deposit', function (req, res){res.render('payment-deposit')})

app.get('/report/total', function (req, res){res.render('report-total')})

app.get('/plugin/bp', function (req, res){res.render('plugin-bp')})
app.get('/plugin/gds', function (req, res){res.render('plugin-gds')})
app.get('/plugin/key-in', function (req, res){res.render('plugin-key-in')})
app.get('/plugin/sms', function (req, res){res.render('plugin-sms')})

app.get('/setting/company', function (req, res){res.render('setting-company')})
app.get('/setting/step', function (req, res){res.render('setting-step')})
app.get('/setting/step/edit', function (req, res){res.render('setting-step-edit')})
app.get('/setting/contract', function (req, res){res.render('setting-contract')})
app.get('/setting/contract/pg-agree01', function (req, res){res.render('setting-contract-pg-agree01')})
app.get('/setting/contract/pg-agree02', function (req, res){res.render('setting-contract-pg-agree02')})
app.get('/setting/contract/pg-agree03', function (req, res){res.render('setting-contract-pg-agree03')})
app.get('/setting/subscribe', function (req, res){res.render('setting-subscribe')})

// DOCS
app.get('/docs/', function (req, res){res.render('docs/empty-page')})
app.get('/docs/empty-page', function (req, res){res.render('docs/empty-page')})
app.get('/docs/empty-page2', function (req, res){res.render('docs/empty-page2')})
app.get('/docs/empty-page3', function (req, res){res.render('docs/empty-page3')})
app.get('/docs/empty-page4', function (req, res){res.render('docs/empty-page4')})
app.get('/docs/topbar', function (req, res){res.render('docs/topbar')})
app.get('/docs/layout', function (req, res){res.render('docs/layout')})
app.get('/docs/colors', function (req, res){res.render('docs/colors')})
app.get('/docs/typography', function (req, res){res.render('docs/typography')})
app.get('/docs/elements', function (req, res){res.render('docs/elements')})
app.get('/docs/modals', function (req, res){res.render('docs/modals')})
app.get('/docs/buttons', function (req, res){res.render('docs/buttons')})
app.get('/docs/list-table', function (req, res){res.render('docs/list-table')})
app.get('/docs/form-controls', function (req, res){res.render('docs/form-controls')})
app.get('/docs/sweetalert', function (req, res){res.render('docs/sweetalert')})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
