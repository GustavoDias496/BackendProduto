import { Request, Response } from "express"
import productModel from "../database/productModel"

const ProductsController = {

    async index(req:Request, res:Response): Promise<Response>{

        let products = await productModel.find()
        return res.json(products)
    }
}

export default ProductsController