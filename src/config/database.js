const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://namastedev:GwYipgZXwGGJKYEB@namastenode.8fnpvow.mongodb.net/devTinder");
}

module.exports = connectDB;