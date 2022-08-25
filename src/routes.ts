import { Router } from 'express'
import ProductController from './controllers/productController'

const router = Router()


router.get('/products', ProductController.index)


export default router