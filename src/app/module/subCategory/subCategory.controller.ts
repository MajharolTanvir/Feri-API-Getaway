import { NextFunction, Request, Response } from 'express';
import { SubCategoryService } from './subCategory.services';
import sendResponse from '../../../shared/response';

const addSubCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SubCategoryService.addSubCategory(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllSubCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SubCategoryService.getAllSubCategory(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const editSubCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SubCategoryService.editSubCategory(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteSubCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SubCategoryService.deleteSubCategory(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
export const SubCategoryController = {
  addSubCategory,
  getAllSubCategory,
  editSubCategory,
  deleteSubCategory
};
