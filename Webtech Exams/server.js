const express = require('express');
const mongoose = require('mongoose');


// Mongodb connection setup
mongoose.connect('mongodb://localhost/goodhealthDb', { useNewUrlParser: true, useUnifiedTopology: true })
.then(results => { console.log('Database connected successfully ..')})
.catch(error => { console.log(`❌ Sorry ${error.message} ...`)});

// Express app and port settings
const server = express();
const port = 3000 || proccess.env.PORT;

// application middleware configurations
server.set('view engine', 'ejs');
server.use(express.static(__dirname + '/assets'));
server.use(express.json());
server.use(express.urlencoded({ extended: true}));

// Defined paths to the various endpoint
server.use('/', require('./routes/'));
server.use('/material', require('./routes/material'));
server.use('/todo', require('./routes/todo'));


//Port
server.listen(port, ()=>{
    console.log(`Server started on port ${port} ...`)
});