import mongoose from "mongoose";

const dbConnection = () => {
    mongoose.connect("mongodb://localhost:27017/readHub").then(() => {
        console.log("db connection successfully")
    }).catch((error) => {
        console.log("db failed", error)
    })
}

export default dbConnection