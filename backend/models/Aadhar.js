const mongoose = require('mongoose');

const AadharSchema = new mongoose.Schema({
    purpose: {
        type: String,
        required: true
    },
    aadharNumber: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Aadhar', AadharSchema);

