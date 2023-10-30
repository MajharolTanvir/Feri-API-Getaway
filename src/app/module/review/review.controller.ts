import { NextFunction, Request, Response } from 'express';
import { ReviewServices } from './review.services';
import sendResponse from '../../../shared/response';

const createReview = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ReviewServices.createReviews(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getReview = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ReviewServices.getReviews(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateReviews = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ReviewServices.updateReviews(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const createReplay = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ReviewServices.createReplay(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const ReviewsController = {
  createReview,
  createReplay,
  getReview,
  updateReviews
};
