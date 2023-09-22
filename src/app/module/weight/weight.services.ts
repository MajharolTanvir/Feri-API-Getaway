import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { coreService } from '../../../shared/axios';

const addWeight = async (req: Request) => {
  const response: IGenericResponse = await coreService.post(`/weights`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getWeights = async (req: Request) => {
  const response: IGenericResponse = await coreService.get(`/weights`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const editWeight = async (req: Request) => {
  const response: IGenericResponse = await coreService.patch(
    `/weights/${req.params.id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const deleteWeight = async (req: Request) => {
  const response: IGenericResponse = await coreService.delete(`/weights/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const WeightService = {
  addWeight,
  getWeights,
  editWeight,
  deleteWeight
};
