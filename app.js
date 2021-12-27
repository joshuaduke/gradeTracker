const express = require('express');
const ejs = require('ejs');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.redirect('/semesters');
})

//Routes for semesters

app.get('/semesters', (req,res)=>{
    res.render('semesters');
})

app.get('/edit_semesters', (req, res)=>{
    res.render('semesters_edit');
})

app.post('/edit_semesters', (req, res)=>{
    const semesterEditValue = req.body.semesterEdit;

    if (semesterEditValue == 'Delete') {
        console.log('IS DELETED');
    } else if(semesterEditValue == 'Save'){
        console.log('SAVED');
    } else {
        console.log('ERR');
    }
    res.redirect('/semesters')
})




app.listen(process.env.PORT || 3000, ()=>{
    console.log('Server has started...');
})