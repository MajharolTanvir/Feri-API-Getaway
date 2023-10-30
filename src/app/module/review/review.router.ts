import express from 'express';
import { ReviewsController } from './review.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.post('/', auth(ENUM_USER_ROLE.BUYER), ReviewsController.createReview);
router.get('/', ReviewsController.getReview);
router.patch('/:id', auth(ENUM_USER_ROLE.BUYER), ReviewsController.updateReviews);
router.post(
  '/reply',
  auth(ENUM_USER_ROLE.BUYER, ENUM_USER_ROLE.SELLER),
  ReviewsController.createReplay
);

export const ReviewsRouter = router;
