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

const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ProductService.getAllProducts(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ProductService.getSingleProduct(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ProductService.updateProduct(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ProductService.deleteProduct(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const ProductController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct
};
