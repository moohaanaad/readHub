import Author from "../../../../DB/Models/author.model.js";


//add author
export const addAuthor = async (req, res, next) => {
    try {
        const author = await Author.insertMany(req.body)
        if (!author) {
            return res.status(404).json({ message: "put author name" })
        }
        return res.status(201).json({ message: "success", author })
    } catch (error) {
        return res.status(500).json({ message: "error", error })
    }
}

//get all authors 
export const allAuthors = async (req, res, next) => {
    try {
        const authors = await Author.find().populate('books')
        if (!authors) {
            return res.status(404).json({ message: "undefind" })
        }
        return res.status(200).json({ message: "success", authors })
    } catch (error) {
        return res.status(500).json({ message: "error", error })
    }
}

//get sepicific author
export const getAuthor = async (req, res, next) => {
    try {
        const { id } = req.params
        const author = await Author.findById(id).populate('books')
        if (!author) {
            return res.status(404).json({ message: "author is not defind" })
        }
        return res.status(200).json({ message: "success", author })
    } catch (error) {
        return res.status(500).json({ message: "error", error })
    }
}

//update author
export const updateAuthor = async (req, res, next) => {
    try {
        const { id } = req.params
        const author = await Author.findByIdAndUpdate(id, req.body, { new: true })
        if (!author) {
            return res.status(404).json({ message: "author is not defind" })
        }
        return res.status(200).json({ message: "success", author })

    } catch (error) {
        return res.status(500).json({ message: "error", error })
    }
}

//delete author
export const deleteAuthor = async (req, res, next) => {
    try {
        const { id } = req.params
        const author = await Author.findByIdAndDelete(id,  { new: true })
        if (!author) {
            return res.status(404).json({ message: "author is not defind" })
        }
        return res.status(200).json({ message: "success", author })

    } catch (error) {
        return res.status(500).json({ message: "error", error })
    }
}