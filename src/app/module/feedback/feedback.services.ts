import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { coreService } from '../../../shared/axios';

const createFeedback = async (req: Request) => {
  const response: IGenericResponse = await coreService.post(`/feedbacks`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getFeedback = async (req: Request) => {
  const response: IGenericResponse = await coreService.get(`/feedbacks`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getSingleFeedback = async (req: Request) => {
  const response: IGenericResponse = await coreService.get(`/feedbacks/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const deleteFeedback = async (req: Request) => {
  const response: IGenericResponse = await coreService.delete(`/feedbacks/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const FeedbackServices = {
  createFeedback,
  getSingleFeedback,
  getFeedback,
  deleteFeedback
};
