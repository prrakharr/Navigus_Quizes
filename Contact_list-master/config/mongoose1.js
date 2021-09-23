const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user:1234@cluster0.vr2yl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const db1= mongoose.connection;

db1.on('error',console.error.bind(console,'error connecting to db1'));

db1.once('open', function(){
    console.log('Successfully connected to database1');
});