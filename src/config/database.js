const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://NamasteDev:k19xjT4U3eSnTLZT@namastenode.xuzlrtp.mongodb.net/devTinder');
}

module.exports = connectDB;