import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { UserService } from './user.services';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.createUser(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  createUser
};
