const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://namastedev:tDDoJVsp6enL4nSg@namastenode.8fnpvow.mongodb.net/");
}

module.exports = connectDB;