import { Router } from "express";
import * as authorsController from "./authorsController/authors.controller.js";

const router = Router()

router.post("/addAuthor", authorsController.addAuthor)
router.get("/allAuthors", authorsController.allAuthors)
router.get("/getAuthor/:id", authorsController.getAuthor)
router.patch("/updateAuthor/:id", authorsController.updateAuthor)
router.delete("/deleteAuthor/:id", authorsController.deleteAuthor)

export default router