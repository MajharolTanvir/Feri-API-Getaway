/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { LocalDiscountService } from './localDiscount.services';

const createLocalDiscount = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await LocalDiscountService.createLocalDiscount(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllLocalDiscount = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await LocalDiscountService.getAllLocalDiscount(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleLocalDiscount = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await LocalDiscountService.getSingleLocalDiscount(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteLocalDiscount = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await LocalDiscountService.deleteLocalDiscount(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const LocalDiscountController = {
  createLocalDiscount,
  getAllLocalDiscount,
  getSingleLocalDiscount,
  deleteLocalDiscount
};
