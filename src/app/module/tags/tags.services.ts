import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { coreService } from '../../../shared/axios';

const createTags = async (req: Request) => {
  const response: IGenericResponse = await coreService.post(`/tags`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getAllTags = async (req: Request) => {
  const response: IGenericResponse = await coreService.get(`/tags`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const updateTags = async (req: Request) => {
  const response: IGenericResponse = await coreService.patch(`/tags/${req.params.id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const deleteTags = async (req: Request) => {
  const response: IGenericResponse = await coreService.delete(`/tags/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const TagsService = {
  createTags,
  getAllTags,
  updateTags,
  deleteTags
};
