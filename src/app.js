const express = require('express');
const handlebars = require('express-handlebars');
const router = require('./routes');
const cookieParser = require('cookie-parser');
const mongoConnect = require('./db');
const session = require('express-session');



const app = express();

app.use(session({
    secret: 'CodeSecret', 
    resave: false,        // No guarde la sesión si no se ha modificado
    saveUninitialized: true, // Guarde una sesión vacía si no hay datos
    cookie: { maxAge: 3600000 } 
  }));


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname + '/public'))
app.use(cookieParser());

app.engine('handlebars', handlebars.engine())
app.set   ( 'view engine', 'handlebars' );
app.set('views',__dirname + '/views')

mongoConnect();

router(app)

module.exports = app;