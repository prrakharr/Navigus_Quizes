const mongoose= require('mongoose');

const contactSchema2 = new mongoose.Schema({
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

const Contact2 = mongoose.model('Contact2', contactSchema2);

module.exports = Contact2;