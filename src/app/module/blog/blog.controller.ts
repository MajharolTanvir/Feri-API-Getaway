/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { BlogService } from './blog.services';

const createBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BlogService.createBlog(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BlogService.getAllBlog(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BlogService.getSingleBlog(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BlogService.updateBlog(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BlogService.deleteBlog(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const BlogController = {
  createBlog,
  getAllBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog
};
