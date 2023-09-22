import { NextFunction, Request, Response } from 'express';
import { SizeService } from './size.services';
import sendResponse from '../../../shared/response';

const addSize = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SizeService.addSize(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSizes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SizeService.getSizes(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const editSize = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SizeService.editSize(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteSize = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SizeService.deleteSize(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
export const SizeController = {
  addSize,
  getSizes,
  editSize,
  deleteSize
};
