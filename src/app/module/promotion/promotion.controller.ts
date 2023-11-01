/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { PromotionService } from './promotion.services';

const createPromotion = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await PromotionService.createPromotion(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllPromotion = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await PromotionService.getAllPromotion(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSinglePromotion = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await PromotionService.getSinglePromotion(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updatePromotion = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await PromotionService.updatePromotion(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deletePromotion = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await PromotionService.deletePromotion(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const PromotionController = {
  createPromotion,
  getAllPromotion,
  getSinglePromotion,
  updatePromotion,
  deletePromotion
};
