/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { GlobalDiscountService } from './globalDiscounts.services';

const createGlobalDiscount = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await GlobalDiscountService.createGlobalDiscount(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllGlobalDiscount = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await GlobalDiscountService.getAllGlobalDiscount(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleGlobalDiscount = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await GlobalDiscountService.getSingleGlobalDiscount(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateGlobalDiscount = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await GlobalDiscountService.updateGlobalDiscount(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteGlobalDiscount = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await GlobalDiscountService.deleteGlobalDiscount(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const GlobalDiscountController = {
  createGlobalDiscount,
  getAllGlobalDiscount,
  getSingleGlobalDiscount,
  updateGlobalDiscount,
  deleteGlobalDiscount
};
