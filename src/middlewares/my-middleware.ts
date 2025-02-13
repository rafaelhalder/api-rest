import { Request, Response, NextFunction } from "express"

export function myMiddleware(request: Request,response: Response, next: NextFunction){
console.log('passou')
request.user_id = '12312312'
return next()
}