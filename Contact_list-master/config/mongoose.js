const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:1234@cluster0.s5pte.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const db= mongoose.connection;

db.on('error',console.error.bind(console,'error connecting to db'));

db.once('open', function(){
    console.log('Successfully connected to database');
});