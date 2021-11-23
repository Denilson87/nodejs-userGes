const express = require('express');
const exphbs = require('express-handlebars');
const fileUpload = require('express-fileupload');
const mysql = require ('mysql');
const bodyParser = require('body-parser');
const { response } = require('express');
const app = express();
const port = process.env.PORT || 5000;

require ('dotenv').config();

//parser middleware
//Parser application/x-www-form-unicoded
//body parser parseing json unicoded data to database

app.use(bodyParser.urlencoded({extended:false}));
app.use(fileUpload());

app.use(bodyParser.json());
app.use(express.json());

//static files
app.use(express.static('public'));
app.use(express.static('upload'));

//tamplating engine
app.engine('hbs', exphbs({extname:'.hbs'}));
app.set('view engine', 'hbs');

//connection pool
const pool = mysql.createPool({
    connectionLimit : 100,
    host            :process.env.DB_HOST,
    user            :process.env.DB_USER,
    password        :process.env.DB_PASS,
    database        :process.env.DB_NAME
});

//CONNNCET TO DB
pool.getConnection((err, connection)=>{
    if(err) throw err;    
    console.log('Whoorey, connceted to DB! ID: ' + connection.threadId);
});

const routes = require('./server/routes/user');

app.use('/', routes);

app.listen(port, ()=> console.log(`a sua aplicacao esta live na porta: ${port}`));
