require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');

const app = express();
const port = 3000 || process.env.PORT;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//static files
app.use(express.static('public'));

//templating Engine
app.use(expressLayout);
app.set('layout','./layouts/main');
app.set('view engine', 'ejs');

//home 
app.get('/', (req, res) => {

    const locals = {
        title: 'GSM AAL',
        description: 'Guest Management System'
    }

    res.render('index', locals)
});

app.listen(port, () => {
    console.log(`Server running on port ${port}!!!`);
})