const express = require('express');
const ejs = require('ejs');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('semesters');
})


app.listen(process.env.PORT || 3000, ()=>{
    console.log('Server has started...');
})