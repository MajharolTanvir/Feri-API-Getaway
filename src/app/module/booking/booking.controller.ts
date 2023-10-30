import { NextFunction, Request, Response } from 'express';
import { AddToCartServices } from '../addToCart/addToCart.services';
import sendResponse from '../../../shared/response';

const createBooking = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AddToCartServices.createAddToCart(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getBooking = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AddToCartServices.getAddToCart(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteBooking = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AddToCartServices.deleteAddToCart(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const BokkingController = {
  createBooking,
  getBooking,
  deleteBooking
};
