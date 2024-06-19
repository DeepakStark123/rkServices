const mongoose = require('mongoose');
require('dotenv').config();

class Database {
    constructor() {
        this._connect();
    }

    _connect() {
        const mongoUri = process.env.MONGO_URI;
        mongoose.connect(mongoUri)
            .then(() => {
                console.log('Database connection successful');
            })
            .catch(err => {
                console.error('Database connection error:', err);
            });
    }
}

module.exports = new Database();
