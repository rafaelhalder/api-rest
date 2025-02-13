import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware";
import { ProductsController } from "../controllers/ProductsController";
export const productsRoutes = Router()
const productsController = new ProductsController();
productsRoutes.get("/", myMiddleware,productsController.index)
productsRoutes.post('/', productsController.create)
