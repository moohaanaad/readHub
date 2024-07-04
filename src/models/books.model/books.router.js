import { Router } from "express";
import * as booksController from "./booksController/books.controller.js";

const router = Router()

router.post("/addBook", booksController.addBook)
router.get("/allBooks", booksController.allBooks)
router.get("/getBook/:id", booksController.getBook)
router.patch("/updateBook/:id", booksController.updateBook)
router.delete("/deleteBook/:id", booksController.deleteBook)

export default router