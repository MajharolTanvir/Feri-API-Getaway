import express from 'express';
import { AddToCartController } from '../addToCart/addToCart.controller';

const router = express.Router();

router.get('/', AddToCartController.getAddToCart);
router.post('/', AddToCartController.createAddToCart);
router.delete('/:id', AddToCartController.deleteAddToCart);

export const BookingRouter = router;
