require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const connectDB = require('./config/db')

const app = express();
const port = 3000 || process.env.PORT;

// connect to database
connectDB();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//static files
app.use(express.static('public'));

//templating Engine
app.use(expressLayout);
app.set('layout','./layouts/main');
app.set('view engine', 'ejs');

//router visitor
app.use('/', require('./routers/visitor'))

//handle 404

app.get('*', (req, res) => {
    res.status(404).render('404');
})

app.listen(port, () => {
    console.log(`Server running on port ${port}!!!`);
})