import { Request, Response } from "express"

const ProductsController = {

    async index(req:Request, res:Response): Promise<Response>{
        let products = {}
        return res.json(products)
    }
}

export default ProductsController