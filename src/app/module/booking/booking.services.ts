import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { coreService } from '../../../shared/axios';

const createBooking = async (req: Request) => {
  const response: IGenericResponse = await coreService.post(`/bookings`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getBooking = async (req: Request) => {
  const response: IGenericResponse = await coreService.get(`/bookings`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const deleteBooking = async (req: Request) => {
  const response: IGenericResponse = await coreService.delete(`/bookings/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const BookingServices = {
  createBooking,
  getBooking,
  deleteBooking
};
