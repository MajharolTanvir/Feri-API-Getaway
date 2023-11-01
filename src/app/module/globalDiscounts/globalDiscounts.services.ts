import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { coreService } from '../../../shared/axios';
import { FileUploadHelper } from '../../../helpers/FileUploadHelper';
import { IUploadFile } from '../../../interfaces/file';

const createGlobalDiscount = async (req: Request) => {
  const file = req.file as IUploadFile;
  const uploadedImage = await FileUploadHelper.uploadToCloudinary(file);

  if (uploadedImage) {
    req.body.thumbnail = uploadedImage.secure_url;
  }
  const response: IGenericResponse = await coreService.post(`/global-discounts`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getAllGlobalDiscount = async (req: Request) => {
  const response: IGenericResponse = await coreService.get(`/global-discounts`, {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getSingleGlobalDiscount = async (req: Request) => {
  const response: IGenericResponse = await coreService.get(`/global-discounts/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const updateGlobalDiscount = async (req: Request) => {
  const file = req.file as IUploadFile;
  const uploadedImage = await FileUploadHelper.uploadToCloudinary(file);

  if (uploadedImage) {
    req.body.thumbnail = uploadedImage.secure_url;
  }
  const response: IGenericResponse = await coreService.patch(
    `/global-discounts/${req.params.id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const deleteGlobalDiscount = async (req: Request) => {
  const response: IGenericResponse = await coreService.delete(
    `/global-discounts/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

export const GlobalDiscountService = {
  createGlobalDiscount,
  getAllGlobalDiscount,
  getSingleGlobalDiscount,
  updateGlobalDiscount,
  deleteGlobalDiscount
};
