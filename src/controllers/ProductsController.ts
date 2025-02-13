import {Request, Response} from "express"
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
    const {name,price} = request.body;
    response.status(201).json({name,price, user_id:request.user_id})
  }
}

export {ProductsController}