import dbConnection from "../DB/connection.js"
import authorsRouter from "./models/authors.model/authors.router.js"
import BooksRouter from "./models/books.model/books.router.js"

dbConnection()
function bootstrap(app, express) {
    app.use(express.json())
    app.use("/books", BooksRouter)
    app.use("/authors", authorsRouter)
}

export default bootstrap