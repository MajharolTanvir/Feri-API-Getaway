import express from 'express';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { FeedbackValidation } from './feedback.validation';
import validateRequest from '../../middlewares/validateRequest';
import { FeedbacksController } from './feedback.controller';

const router = express.Router();

router.post(
  '/',
  auth(ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.BUYER),
  validateRequest(FeedbackValidation.createFeedback),
  FeedbacksController.createFeedback
);
router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.MODERATOR),
  FeedbacksController.getFeedback
);
router.get(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.MODERATOR),
  FeedbacksController.getSingleFeedback
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.MODERATOR),
  FeedbacksController.deleteFeedbacks
);

export const FeedbackRouter = router;
