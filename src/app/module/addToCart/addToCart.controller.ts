import { NextFunction, Request, Response } from 'express';
import { AddToCartServices } from './addToCart.services';
import sendResponse from '../../../shared/response';

const createAddToCart = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AddToCartServices.createAddToCart(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAddToCart = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AddToCartServices.getAddToCart(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteAddToCart = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AddToCartServices.deleteAddToCart(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AddToCartController = {
  createAddToCart,
  getAddToCart,
  deleteAddToCart
};
