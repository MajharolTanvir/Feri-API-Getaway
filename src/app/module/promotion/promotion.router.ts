import express, { NextFunction, Request, Response } from 'express';
import { PromotionController } from './promotion.controller';
import { PromotionValidation } from './promotion.validation';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { FileUploadHelper } from '../../../helpers/FileUploadHelper';

const router = express.Router();

router.post(
  '/',
  auth(ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.MODERATOR, ENUM_USER_ROLE.ADMIN),
  validateRequest(PromotionValidation.createPromotion),
  PromotionController.createPromotion
);
router.get('/', PromotionController.getAllPromotion);
router.get('/:id', PromotionController.getSinglePromotion);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.MODERATOR, ENUM_USER_ROLE.ADMIN),
  FileUploadHelper.upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = PromotionValidation.updatePromotion.parse(JSON.parse(req.body.data));
    return PromotionController.updatePromotion(req, res, next);
  }
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.MODERATOR, ENUM_USER_ROLE.ADMIN),
  PromotionController.deletePromotion
);

export const PromotionRouter = router;
