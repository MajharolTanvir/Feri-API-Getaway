import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { coreService } from '../../../shared/axios';

const addSize = async (req: Request) => {
  const response: IGenericResponse = await coreService.post(`/sizes`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getSizes = async (req: Request) => {
  const response: IGenericResponse = await coreService.get(`/sizes`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const editSize = async (req: Request) => {
  const response: IGenericResponse = await coreService.patch(`/sizes/${req.params.id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const deleteSize = async (req: Request) => {
  const response: IGenericResponse = await coreService.delete(`/sizes/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const SizeService = {
  addSize,
  getSizes,
  editSize,
  deleteSize
};
