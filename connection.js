const mongoose = require('mongoose');

const connectMongoDB = () => {
    const linkMongo = 'mongodb+srv://pabor:objp0174@cluster0.u65t8p4.mongodb.net/nodeMongo?retryWrites=true&w=majority'
    mongoose.set('strictQuery', false);
    mongoose.connect(linkMongo)
    .then(()=>{
        console.log('Connected to MongoDB');
    })
    .catch((e)=>{
        console.log('Error');
    });
}

module.exports = connectMongoDB;