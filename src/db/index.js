const mongoose = require('mongoose');


const mongoConnect = async () => {
try{
    await mongoose.connect('mongodb+srv://nicolasgarciagorchs:nicolasgarciagorchs@primerbasededatos.fk1940x.mongodb.net/?retryWrites=true&w=majority')
    console.log('DB is connected');
    }catch(error){
console.log(error);
    }
}
module.exports = mongoConnect;

