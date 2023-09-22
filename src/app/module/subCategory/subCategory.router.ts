import express from 'express';
import { SubCategoryValidation } from './subCategory.validation';
import { SubCategoryController } from './subCategory.controller';
import validateRequest from '../../middlewares/validateRequest';
const router = express.Router();

router.patch(
  '/:id',
  validateRequest(SubCategoryValidation.updateSubCategoryZodSchema),
  SubCategoryController.editSubCategory
);

router.get('/', SubCategoryController.getAllSubCategory);

router.delete('/:id', SubCategoryController.deleteSubCategory);

router.post(
  '/',
  validateRequest(SubCategoryValidation.createSubCategoryZodSchema),
  SubCategoryController.addSubCategory
);

export const SubCategoryRoutes = router;
