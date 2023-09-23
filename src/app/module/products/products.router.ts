import express, { NextFunction, Request, Response } from 'express';

import { ProductController } from './products.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { FileUploadHelper } from '../../../helpers/FileUploadHelper';
import { ProductValidation } from './products.validation';

const router = express.Router();

router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.MODERATOR, ENUM_USER_ROLE.SELLER),
  FileUploadHelper.upload.array('files', 5),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = ProductValidation.createProduct.parse(JSON.parse(req.body.data));
    return ProductController.createProduct(req, res, next);
  }
);

export const ProductRouter = router;
