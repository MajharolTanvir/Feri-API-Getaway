import express, { NextFunction, Request, Response } from 'express';
import { UserController } from './user.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { FileUploadHelper } from '../../../helpers/FileUploadHelper';
import { UserValidation } from './user.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();
router.post('/signup', validateRequest(UserValidation.createUser), UserController.createUser);
router.post(
  '/confirm-signup',
  validateRequest(UserValidation.createUser),
  UserController.confirmUser
);
router.post('/login', UserController.loginUser);
router.patch(
  '/profile',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.MODERATOR, ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.BUYER),
  FileUploadHelper.upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = UserValidation.updateUser.parse(JSON.parse(req.body.data));
    return UserController.userProfile(req, res, next);
  }
);
router.post('/forget-password', UserController.forgetPassword);
router.post('/reset-password', UserController.resetPassword);

export const UserRouter = router;
