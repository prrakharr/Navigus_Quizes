const express = require('express');
const path = require('path');
let port = process.env.PORT;

if (port == null || port == "") {
  port = 1000;
}

const db=require('./config/mongoose');
const Contact= require('./models/contact');
const Contact1= require('./models/contact1');
const Contact2= require('./models/contact2');

const app = express();

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));



app.get('/',function(req,res){
    
    Contact.find({},function(err,contacts){
        if(err){
            console.log('Error in rendering select');
            return;
        }

        return res.render('select');

    }); 

});

app.get('/selectsub',function(req,res){
    
    Contact.find({},function(err,contacts){
        if(err){
            console.log('Error in rendering select');
            return;
        }

        return res.render('selectsub');

    }); 

});

app.get('/selectsubstud',function(req,res){
    
    Contact.find({},function(err,contacts){
        if(err){
            console.log('Error in rendering select');
            return;
        }

        return res.render('selectsubstud');

    }); 

});




app.get('/home',function(req,res){
    
    Contact.find({},function(err,contacts){
        if(err){
            console.log('Error in fetching contacts from db');
            return;
        }

        return res.render('home',{
            title: "Contact List",
            contact_list: contacts
    
        });

    }); 

});

app.get('/home1',function(req,res){
    
    Contact1.find({},function(err,contacts){
        if(err){
            console.log('Error in fetching contacts from db');
            return;
        }

        return res.render('home1',{
            title: "Contact List",
            contact_list: contacts
    
        });

    }); 

});

app.get('/home2',function(req,res){
    
    Contact2.find({},function(err,contacts){
        if(err){
            console.log('Error in fetching contacts from db');
            return;
        }

        return res.render('home2',{
            title: "Contact List",
            contact_list: contacts
    
        });

    }); 

});


app.get('/student',function(req,res){
    
    Contact.find({},function(err,contacts){
        if(err){
            console.log('Error in fetching contacts from db');
            return;
        }

        return res.render('student',{
            title: "Contact List",
            contact_list: contacts
    
        });

    }); 

});

app.get('/student1',function(req,res){
    
    Contact1.find({},function(err,contacts){
        if(err){
            console.log('Error in fetching contacts from db');
            return;
        }

        return res.render('student1',{
            title: "Contact List",
            contact_list: contacts
    
        });

    }); 

});

app.get('/student2',function(req,res){
    
    Contact2.find({},function(err,contacts){
        if(err){
            console.log('Error in fetching contacts from db');
            return;
        }

        return res.render('student2',{
            title: "Contact List",
            contact_list: contacts
    
        });

    }); 

});


app.post('/create-contact',function(req,res){
    Contact.create(req.body,function(err,newContact){
        if(err){
            console.log('error in creating contact!');
            return;
        }

        console.log('*****', newContact);
        return res.redirect('back');
    });

});

app.post('/create-contact1',function(req,res){
    Contact1.create(req.body,function(err,newContact1){
        if(err){
            console.log('error in creating contact!');
            return;
        }

        console.log('*****', newContact1);
        return res.redirect('back');
    });

});

app.post('/create-contact2',function(req,res){
    Contact2.create(req.body,function(err,newContact2){
        if(err){
            console.log('error in creating contact!');
            return;
        }

        console.log('*****', newContact2);
        return res.redirect('back');
    });

});


app.get('/delete-contact/',function(req,res){
    let id=req.query.id;

    Contact.findByIdAndDelete(id,function(err){
        if(err){
            console.log('error in deleting an object from database');
            return;
        }
        return res.redirect('back');

    });
    
});

app.get('/delete-contact1/',function(req,res){
    let id=req.query.id;

    Contact1.findByIdAndDelete(id,function(err){
        if(err){
            console.log('error in deleting an object from database');
            return;
        }
        return res.redirect('back');

    });
    
});

app.get('/delete-contact2/',function(req,res){
    let id=req.query.id;

    Contact2.findByIdAndDelete(id,function(err){
        if(err){
            console.log('error in deleting an object from database');
            return;
        }
        return res.redirect('back');

    });
    
});

app.listen(port,function(err){
    if(err){
        console.log('Error in running the server',err);
    }

    console.log('The server is running without any error at port:',port);
    
});