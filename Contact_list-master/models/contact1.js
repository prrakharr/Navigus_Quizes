const mongoose= require('mongoose');

const contactSchema1 = new mongoose.Schema({
    Question: {
        type: String,
        required: true
    },
    Option1: {
        type: String,
        required: true
    },
    Option2: {
        type: String,
        required: true
    },
    Option3: {
        type: String,
        required: true
    },
    Option4: {
        type: String,
        required: true
    }
});

const Contact1 = mongoose.model('Contact1', contactSchema1);

module.exports = Contact1;