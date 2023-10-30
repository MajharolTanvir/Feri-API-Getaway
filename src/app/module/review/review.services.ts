import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { coreService } from '../../../shared/axios';

const createReviews = async (req: Request) => {
  const response: IGenericResponse = await coreService.post(`/reviews`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getReviews = async (req: Request) => {
  const response: IGenericResponse = await coreService.get(`/reviews`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const createReplay = async (req: Request) => {
  const response: IGenericResponse = await coreService.post(`/reviews/replay`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const updateReviews = async (req: Request) => {
  const response: IGenericResponse = await coreService.patch(
    `/reviews/${req.params.id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

export const ReviewServices = {
  createReviews,
  createReplay,
  getReviews,
  updateReviews
};
