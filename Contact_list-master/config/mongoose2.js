const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user2:1234@cluster0.xfxdp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const db2= mongoose.connection;

db2.on('error',console.error.bind(console,'error connecting to db2'));

db2.once('open', function(){
    console.log('Successfully connected to database2');
});