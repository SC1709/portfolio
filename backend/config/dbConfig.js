const mongoose = require("mongoose");
mongoose.connect(process.env.mongo_url);

const connection = mongoose.connection;
connection.on("error", () => {
    console.log("Error connecting to database");
});
connection.on("connected", () => {
    console.log("Mongo DB connection Successful");
});
module.exports = connection;