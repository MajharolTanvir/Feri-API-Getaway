import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { coreService } from '../../../shared/axios';

const createAddToCart = async (req: Request) => {
  const response: IGenericResponse = await coreService.post(`/add-to-cart`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getAddToCart = async (req: Request) => {
  const response: IGenericResponse = await coreService.get(`/add-to-cart`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const deleteAddToCart = async (req: Request) => {
  const response: IGenericResponse = await coreService.delete(`/add-to-cart/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const AddToCartServices = {
  createAddToCart,
  getAddToCart,
  deleteAddToCart
};
