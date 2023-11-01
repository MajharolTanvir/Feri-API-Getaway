import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { coreService } from '../../../shared/axios';

const createLocalDiscount = async (req: Request) => {
  const response: IGenericResponse = await coreService.post(`/local-discounts`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getAllLocalDiscount = async (req: Request) => {
  const response: IGenericResponse = await coreService.get(`/local-discounts`, {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getSingleLocalDiscount = async (req: Request) => {
  const response: IGenericResponse = await coreService.get(`/local-discounts/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const deleteLocalDiscount = async (req: Request) => {
  const response: IGenericResponse = await coreService.delete(`/local-discounts/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const LocalDiscountService = {
  createLocalDiscount,
  getAllLocalDiscount,
  getSingleLocalDiscount,
  deleteLocalDiscount
};
