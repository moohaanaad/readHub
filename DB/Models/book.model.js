import { timeStamp } from "console";
import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    }

},{
    timestamps:{
    createdAt:true,
    updatedAt:false
}
})

const Book = mongoose.model("Book",BookSchema)
export default Book