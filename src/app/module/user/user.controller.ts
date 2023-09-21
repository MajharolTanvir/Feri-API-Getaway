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

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.loginUser(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const userProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.userProfile(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const forgetPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.forgetPassword(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const resetPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.resetPassword(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  createUser,
  loginUser,
  userProfile,
  forgetPassword,
  resetPassword
};
