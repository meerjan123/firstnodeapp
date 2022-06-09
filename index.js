var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello 2022 Welcome to the Demo of First Node App with Jenkins!" }');
});

app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works!" }');
});

app.listen(process.env.PORT || 3000);
module.exports = app;
