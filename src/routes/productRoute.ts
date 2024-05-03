import {Router} from 'express';
import { getProduct, getProducts, deleteProduct, postProduct } from '../controllers/productController';


const router = Router();


router.get('/',getProducts);
router.get('/:id',getProduct);
router.delete('/:id',deleteProduct);
router.post('/', postProduct);
export default router;