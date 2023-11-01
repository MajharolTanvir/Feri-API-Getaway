import express from 'express';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import { LocalDiscountController } from './localDiscount.controller';
import { LocalDiscountValidation } from './localDiscount.validation';

const router = express.Router();
router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(LocalDiscountValidation.createLocalDiscount),
  LocalDiscountController.createLocalDiscount
);
router.get('/', LocalDiscountController.getAllLocalDiscount);
router.get('/:id', LocalDiscountController.getSingleLocalDiscount);
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), LocalDiscountController.deleteLocalDiscount);

export const LocalDiscountRouter = router;
