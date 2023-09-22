import { NextFunction, Request, Response } from 'express';
import { WeightService } from './weight.services';
import sendResponse from '../../../shared/response';

const addWeight = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await WeightService.addWeight(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getWeights = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await WeightService.getWeights(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const editWeight = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await WeightService.editWeight(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteWeight = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await WeightService.deleteWeight(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const WeightController = {
  addWeight,
  getWeights,
  editWeight,
  deleteWeight
};
