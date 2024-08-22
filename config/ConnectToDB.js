const mongoose = require ("mongoose");

module.exports = async () => {
    try {
        await mongoose.connect("mongodb+srv://khaled:oussama123456@cluster0.3x0ase8.mongodb.net/");
        console.log("Database connection successful");
    } catch (error) {
        console.log("Database connection error",error);
        process.exit(1); //Exit the application if connection fails
        
    }
}