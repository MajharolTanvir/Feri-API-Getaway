import { NextFunction, Request, Response } from 'express';
import { CategoryService } from './category.services';
import sendResponse from '../../../shared/response';

const addCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CategoryService.addCategory(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CategoryService.getAllCategory(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const editCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CategoryService.editCategory(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CategoryService.deleteCategory(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const CategoryController = {
  addCategory,
  getAllCategory,
  editCategory,
  deleteCategory
};
