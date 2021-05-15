// This is our app file.
const express = require('express');
const app = express();
const port = 3000;
const {data} = require('./data/data.json');
var path = require('path');

//view engine setup (from TreeHouse Pug Practice)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// MIDDLEWARE
app.use('/static', express.static('public'))


// ROUTES
app.get('/', (req,res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/project/', (req, res) => {
    res.render('project');
});

app.listen(port, () => {
    console.log(`My Porfolio app listening localhost:${port}`);
});


