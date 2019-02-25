var http = require('http');
var express = require('express');
var app = express();
app.set('view engine', "vash");
app.get('/', (req, res) => {
    res.render('index', { title: 'jade rendered page', h1Content: 'my cool h1' });
});

app.get('/api/users', (req, res) => {
    let users = [
        { name: "adam" },
        { name: "beth" },
        { name: "ayden" },
        { name: "ashtyn" },
    ];
    res.send(users);
});


var server = http.createServer(app);

server.listen(3000);