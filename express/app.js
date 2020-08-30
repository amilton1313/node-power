var express = require('express');
var logger = require('morgan');
var cors = require('cors');

const verifyToken = require('./middelwares')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.get('/hello', (req, res) => {
    res.send('Hello world')
})

app.use(cors())



// app.options('*', function (req, res) {
//     res.status(204)
//     res.setHeader('Access-Control-Allow-Origin','*')
//     res.end()
// })


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', verifyToken, usersRouter);

module.exports = app;
