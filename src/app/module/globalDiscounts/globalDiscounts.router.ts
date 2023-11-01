import express, { NextFunction, Request, Response } from 'express';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { GlobalDiscountController } from './globalDiscounts.controller';
import { GlobalDiscountValidation } from './globalDiscounts.validation';
import { FileUploadHelper } from '../../../helpers/FileUploadHelper';

const router = express.Router();
router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN),
  FileUploadHelper.upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = GlobalDiscountValidation.createGlobalDiscount.parse(JSON.parse(req.body.data));
    return GlobalDiscountController.createGlobalDiscount(req, res, next);
  }
);
router.get('/', GlobalDiscountController.getAllGlobalDiscount);
router.get('/:id', GlobalDiscountController.getSingleGlobalDiscount);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  FileUploadHelper.upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = GlobalDiscountValidation.updateGlobalDiscount.parse(JSON.parse(req.body.data));
    return GlobalDiscountController.updateGlobalDiscount(req, res, next);
  }
);
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), GlobalDiscountController.deleteGlobalDiscount);

export const GlobalDiscountRouter = router;
