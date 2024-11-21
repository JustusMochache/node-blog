//after creating the dotenv now we can use it in our application
require('dotenv').config();

// create a very basic express server


const express = require('express');
const expressLayout = require('express-ejs-layouts');

const app = express();

const PORT = 5000 || process.env.PORT;


app.use(express.static('public'));

//templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/', require('./server/routes/main'))


app.listen(PORT, ()=> {
    console.log(`App listening on port ${PORT} `);
    
});

