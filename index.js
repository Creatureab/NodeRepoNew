const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/login.html');
});

app.post('/login', function(req, res) {
    let user = req.body.user;
    let pass = req.body.pass;

    if (user == 'amey' && pass == '12345') {
        res.redirect('/home?user=' + encodeURIComponent(user));
    } else {
        res.send('Incorrect Username and/or Password!');
    }
});

app.get('/home', (req, res) => {
    let user = req.query.user || "Guest";
    res.send(`Welcome, ${user}!`);
});

// Start server
server.listen(8082, () => {
    console.log("Server is running on port 8082");

    // Stop server after 120 seconds
    setTimeout(() => {
        console.log('Shutting down server...');
        server.close(() => {
            console.log('Server stopped.');
            process.exit(0);  // Exit process
        });
    }, 120000);
});