import express from 'express';
import { ColorController } from './color.controller';
import { ColorValidation } from './color.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

//* Color routes

router.patch(
  '/:id',
  validateRequest(ColorValidation.updateColorZodSchema),
  ColorController.editColor
);

router.get('/', ColorController.getColors);

router.delete('/:id', ColorController.deleteColor);

router.post('/', validateRequest(ColorValidation.createColorZodSchema), ColorController.addColor);

export const ColorRouter = router;
