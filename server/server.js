console.log('Server');
// require express so the app can use its features
const express = require('express');

// create app
const app = express();

// set default folder for app to show it where the index is
app.use( express.static('server/public') );

// global constants and variables
const port = 5000;
let calculationHistory = [];

// spin up server
app.listen(port, ()=>{
    console.log('Server up on port:', port);
})

// set routes