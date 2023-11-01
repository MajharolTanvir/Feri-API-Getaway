import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { coreService } from '../../../shared/axios';
import { FileUploadHelper } from '../../../helpers/FileUploadHelper';
import { IUploadFile } from '../../../interfaces/file';

const createPromotion = async (req: Request) => {
  const response: IGenericResponse = await coreService.post(`/promotions`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getAllPromotion = async (req: Request) => {
  const response: IGenericResponse = await coreService.get(`/promotions`, {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getSinglePromotion = async (req: Request) => {
  const response: IGenericResponse = await coreService.get(`/promotions/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const updatePromotion = async (req: Request) => {
  const file = req.file as IUploadFile;
  const uploadedImage = await FileUploadHelper.uploadToCloudinary(file);

  if (uploadedImage) {
    req.body.thumbnail = uploadedImage.secure_url;
  }
  const response: IGenericResponse = await coreService.post(
    `/promotions/${req.params.id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const deletePromotion = async (req: Request) => {
  const response: IGenericResponse = await coreService.delete(`/promotions/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const PromotionService = {
  createPromotion,
  getAllPromotion,
  getSinglePromotion,
  updatePromotion,
  deletePromotion
};
