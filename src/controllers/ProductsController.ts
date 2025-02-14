import {Request, Response} from "express"
import { AppError } from "../utils/AppError";
import {z} from "zod"
class ProductsController{
/**
 * index - GET listar
 * show - GET exibir
 * create - POST
 * update PUT
 * remove DELETE
 */

  index(request: Request, response: Response){
    const {page,limit} = request.query;
    response.send(`${page}${limit}`)
  }

  create(request: Request, response: Response){

    const bodySchema = z.object({
      name:z.string().trim().min(6,{message: "minimo 6 caracteres"}), // minimo 6 caracteres
      //name:z.string().min(6), // minimo 6 caracteres
      price:z.number({required_error: "Price is required"}).positive({message: "price most be positivo"}).gte(10)
      //price:z.number().nullish() // OPCIONAL
    })
    const {name,price} = bodySchema.parse(request.body)

    if(!name || !price){
      throw new AppError("Nome faltante")
    }
    response.status(201).json({name,price, user_id:request.user_id})
  }
}

export {ProductsController}