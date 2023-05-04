const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        const connect = await mongoose.connect("mongodb+srv://admin:admin@dominidscluser.mlk77ny.mongodb.net/tour_of_heroes?retryWrites=true&w=majority");
        console.log(
            "Database connected: ",
            connect.connection.host,
            connect.connection.name)
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
    
};

module.exports = connectDb;