import express, { NextFunction, Request, Response } from 'express';
import { CategoryValidation } from './category.validation';
import { CategoryController } from './category.controller';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { FileUploadHelper } from '../../../helpers/FileUploadHelper';

const router = express.Router();

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.MODERATOR),
  FileUploadHelper.upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = CategoryValidation.updateCategoryZodSchema.parse(JSON.parse(req.body.data));
    return CategoryController.editCategory(req, res, next);
  }
);

router.get('/', CategoryController.getAllCategory);

router.delete('/:id', CategoryController.deleteCategory);

router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.MODERATOR),
  FileUploadHelper.upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = CategoryValidation.createCategoryZodSchema.parse(JSON.parse(req.body.data));
    return CategoryController.addCategory(req, res, next);
  }
);

export const CategoryRoutes = router;
