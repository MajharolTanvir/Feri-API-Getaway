import express, { NextFunction, Request, Response } from 'express';
import { BlogController } from './blog.controller';
import { BlogValidation } from './blog.validation';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { FileUploadHelper } from '../../../helpers/FileUploadHelper';

const router = express.Router();

router.post(
  '/',
  auth(ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.MODERATOR, ENUM_USER_ROLE.ADMIN),
  FileUploadHelper.upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = BlogValidation.createBlog.parse(JSON.parse(req.body.data));
    return BlogController.createBlog(req, res, next);
  }
);
router.get('/', BlogController.getAllBlog);
router.get('/:id', BlogController.getSingleBlog);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.MODERATOR, ENUM_USER_ROLE.ADMIN),
  FileUploadHelper.upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = BlogValidation.createBlog.parse(JSON.parse(req.body.data));
    return BlogController.updateBlog(req, res, next);
  }
);
router.post('/:id', BlogController.deleteBlog);

export const BlogRouter = router;
