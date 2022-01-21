//jshint esversion:8
const express = require('express');
const hbs = require('hbs');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

//require body-parser to parse the info being sent with method post because the data is not readable by default in express - body-parser is part of express, no need to install npm
//the parsed data is avaiable in req.body
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// route with post
// submit button 
app.get('/login', (req, res) => res.render('login'));

app.post('/login', (req, res) => {

    // const email = req.body.email;
    // const pass = req.body.password;
  
    // the same as 2 lines above
    const { email, password } = req.body;
  
    res.send(
        `Your email is ${email}
        and your password is ${password}`
    );
});

app.listen(3000, () => console.log('App listening on port 3000!'));



//exercise

// app.post('/login', (req, res, next) => {

//     const {email, password} = req.body;

//     if (email === 'ironhacker@gmail.com' && password === 'password') {
//         res.send('Welcome Ironhacker');
//     } else {
//         res.send('Go Away');
//     }
// });


// MIDDLEWARE 
/* 
app.use(myFakeMiddleware);

app.get('/test', (req, res) => {

    let mySecret = req.secretValue;
    res.send(mySecret);
});

function myFakeMiddleware(req, res, next) {

    console.log('myFakeMiddleware was called!');
    //because middleware happens before the request get to the server(app.get), the new info will be avaiable there
    req.secretValue = 'swordfish';
    //next is what tell it to go to the next step(another middleware or the server )
    next();
} */
  
