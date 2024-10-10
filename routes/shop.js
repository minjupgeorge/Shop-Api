import express from 'express';

import shopControllers from '../controllers/shop.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();

const { getAllProducts, getProductById, getAddProductForm, addProduct } =
    shopControllers;

// routes
router.get('/products', getAllProducts);

router.get('/products/:id', getProductById);
//form to add products
router.get('/add-product', verifyToken, getAddProductForm);
//add a product
router.post('/add-product', addProduct);

export default router;