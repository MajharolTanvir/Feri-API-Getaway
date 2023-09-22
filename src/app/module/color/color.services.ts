import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { coreService } from '../../../shared/axios';

const addColor = async (req: Request) => {
  const response: IGenericResponse = await coreService.post(`/colors`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getColors = async (req: Request) => {
  const response: IGenericResponse = await coreService.get(`/colors`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const editColor = async (req: Request) => {
  const response: IGenericResponse = await coreService.patch(`/colors/${req.params.id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const deleteColor = async (req: Request) => {
  const response: IGenericResponse = await coreService.delete(`/colors/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const ColorService = {
  addColor,
  getColors,
  editColor,
  deleteColor
};
