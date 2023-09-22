import express from 'express';
import { CommonValidation } from './weight.validation';
import { WeightController } from './weight.controller';
import validateRequest from '../../middlewares/validateRequest';
const router = express.Router();

//* weight routes
router.patch(
  '/:id',
  validateRequest(CommonValidation.updateWeightZodSchema),
  WeightController.editWeight
);

router.get('/', WeightController.getWeights);

router.delete('/:id', WeightController.deleteWeight);

router.post(
  '/',
  validateRequest(CommonValidation.createWeightZodSchema),
  WeightController.addWeight
);

export const WeightRouter = router;
