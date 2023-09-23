/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { ProductService } from './products.services';
import sendResponse from '../../../shared/response';

const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ProductService.createProduct(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const ProductController = {
  createProduct
};
