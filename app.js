// This is our app file.
const express = require('express');
const app = express();
const port = 3000;
const {data} = require('./data/data.json');

// MIDDLEWARE
app.use(express.static('public'))


// ROUTES
app.get('/', (req,res) => {
    res.send("My Portfolio");
});

app.get('/about', (req, res) => {
    res.send("About Page");
});

app.get('/project/', (req, res) => {
    res.send("Project Page");
});

app.listen(port, () => {
    console.log(`My Porfolio app listening localhost:${port}`);
});


