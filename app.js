// This is our app file.
const express = require('express');
const app = express();
const port = 3000;
const {data} = require('./data/data.json');
//console.log(data);
const {projects} = data;
var path = require('path');

//view engine setup (from TreeHouse Pug Practice)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// set static route for static public files
app.use('/static', express.static('public'))


// ROUTES
app.get('/', (req,res) => {
    res.render('index', {projects});
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/project/:id', (req, res, next) => {
    const projectId = req.params.id;
    //console.log(id);
    //console.log(projects);
    
    const project = projects.find(({id}) => id === +projectId);
    //console.log("The Project: ", project);
    if (project) {
        res.render('project', {project});
    } else {
        const message = 'That project does not exist.'
        const err = new Error(message);
        err.status = 500;
        console.log(`Error Status ${err.status} - ${message}`);
        next(err);
    }
});

// MIDDLEWARE
// 404
app.use((req, res, next) => {
    const message = 'The requested page does not exist or has been moved.';
    const err = new Error(message);
    err.status = 404;
    console.log(`Error Status ${err.status} - ${message}`);
    next(err);
});

// Error Middleware
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});




app.listen(port, () => {
    console.log(`My Porfolio app listening localhost:${port}`);
});


