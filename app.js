const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//const path = require('path')
const expressLayouts = require('express-ejs-layouts');
const port = process.env.PORT || 3000;


require('./db');

app.set('view engine', 'ejs');
app.use(expressLayouts);

/* app.use(express.urlencoded({extended:true}))
app.use(express.json()) */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));


app.use(express.static('public'));
app.use(express.static('controllers'));


//utilizamos el router
const router = require('./routes/router');
app.use('/', router);

/* app.get('/', (req, res) =>{
    res.send('Hello World!')
})   */  

app.listen(port, ()=>{
    console.log('---> ¡Server UP! en http://localhost:3000');
})
