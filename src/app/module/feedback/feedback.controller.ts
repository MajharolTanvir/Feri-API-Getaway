import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { FeedbackServices } from './feedback.services';

const createFeedback = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FeedbackServices.createFeedback(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getFeedback = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FeedbackServices.getFeedback(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteFeedbacks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FeedbackServices.deleteFeedback(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleFeedback = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FeedbackServices.getSingleFeedback(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const FeedbacksController = {
  createFeedback,
  getSingleFeedback,
  getFeedback,
  deleteFeedbacks
};
