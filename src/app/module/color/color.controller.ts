import { ColorService } from './color.services';
import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';

const addColor = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ColorService.addColor(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getColors = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ColorService.getColors(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const editColor = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ColorService.editColor(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteColor = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ColorService.deleteColor(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const ColorController = {
  addColor,
  getColors,
  editColor,
  deleteColor
};
