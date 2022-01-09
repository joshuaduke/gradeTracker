const express = require('express');
const ejs = require('ejs');
const { render } = require('express/lib/response');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(express.static(__dirname + 'views'));
app.set('view engine', 'ejs');

// app.get('/', (req, res)=>{
//     res.redirect('/semesters');
// })

/************************** Routes for semesters ************************************/

app.get('/', (req,res)=>{
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

app.get('/add_semesters', (req, res)=>{
    res.render('semesters_add');
})

app.post('/add_semesters', (req, res)=>{
    res.render('semesters_add');
})




/************************** Routes for Courses ************************************/
app.get('/courses', (req, res)=>{
    res.render('courses');
})

app.get('/courses_edit' , (req, res)=>{
    res.render('courses_edit');
});

app.get('/courses_add', (req, res)=>{
    res.render('courses_add');
})

/************************** Routes for Grades ************************************/
app.get('/grades', (req, res)=>{
    res.render('grades')
})

app.get('/grades_edit', (req, res)=>{
    res.render('grades_edit')
})

app.get('/grade_item', (req, res)=>{
    res.render('manageGradeItem');
})

/************************** Routes for GPA and Scales ************************************/
app.get('/cgpa', (req, res)=>{
    res.render('gpa');
})


/************************** Route for Fallback ************************************/
app.get('/fallback', (req, res)=>{
    res.render('fallback');
})



app.listen(process.env.PORT || 3000, ()=>{
    console.log('Server has started...');
})