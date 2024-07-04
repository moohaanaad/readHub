import mongoose from "mongoose";

const AthourSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    bio: String,
    birthDate: Date,
    books: [{
        type: mongoose.Types.ObjectId,
        require:true,
        ref: "Book"
    }]
})

const Author = mongoose.model("Author", AthourSchema)

export default Author