var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello, Welcome to Demo of Deploying Node Application into Kubernetes Cluster using Jenkins Pipeline');
});

app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works!" }');
});

app.listen(process.env.PORT || 3000);
module.exports = app;
