import Book from "../../../../DB/Models/book.model.js";

//add book
export const addBook = async (req, res, next) => {
    try {
        const book = await Book.insertMany(req.body)
        return res.status(201).json({ message: "success", book })
    } catch (error) {
        return res.status(500).json({ message: "error", error })
    }
}

//get all books
export const allBooks = async (req, res, next) => {
    const books = await Book.find()
    if (!books) {
        return res.status(404).json({ message: "undefind" })
    }
    return res.status(200).json({ message: "success", books })
}

//get specific book
export const getBook = async (req, res, next) => {
    try {
        const { id } = req.params
        const book = await Book.findById(id)
        if (!book) {
            return res.status(404).json({ message: "book is not defind" })
        }
        return res.status(200).json({ message: "success", book })
    } catch (error) {

        return res.status(500).json({ message: "error", error })
    }

}

//update book
export const updateBook = async (req, res, next) => {
    try {
        const { id } = req.params
        const book = await Book.findByIdAndUpdate(id, req.body, { new: true })
        if (!book) {
            return res.status(404).json({ message: "book is not defind" })
        }
        return res.status(200).json({ message: "success", book })
    } catch (error) {
        return res.status(500).json({ message: "error", error })
    }
}

//delete book 
export const deleteBook = async (req, res, next) => {
    try {
        const { id } = req.params
    const book = await Book.findByIdAndDelete(id)
    if (!book) {
        return res.status(404).json({message:"book is not defind"})
    }
    return res.status(200).json({ message: "success", book })
    } catch (error) {
        return res.status(500).json({ message: "error", error })
    }
}