const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();

// public folder path
const public_path = path.join(__dirname, "../public"); 
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");  

// using view engine
app.set('view engine', 'hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);

app.use(express.static(public_path));

app.get('/', (req,res) => {
    res.render('index');
});

app.get('/home', (req,res) => {
    res.render('index');
});

app.get('/weather', (req,res) => {
    res.render('weather');
});

app.get('*', (req,res) => {
    res.render('404error', {
        errorMsg: "Opps! Page not Found"
    });
});

app.listen(8000, () => {
    console.log("Server running to the port 8000.");
})