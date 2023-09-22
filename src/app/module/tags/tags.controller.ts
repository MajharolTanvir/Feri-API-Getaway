import { NextFunction, Request, Response } from 'express';
import { TagsService } from './tags.services';
import sendResponse from '../../../shared/response';

const createTags = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await TagsService.createTags(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllTags = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await TagsService.getAllTags(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateTags = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await TagsService.updateTags(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const deleteTags = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await TagsService.deleteTags(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const TagsController = {
  createTags,
  getAllTags,
  updateTags,
  deleteTags
};
