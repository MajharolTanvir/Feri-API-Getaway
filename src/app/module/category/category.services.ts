import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { coreService } from '../../../shared/axios';
import { IUploadFile } from '../../../interfaces/file';
import { FileUploadHelper } from '../../../helpers/FileUploadHelper';

const addCategory = async (req: Request) => {
  const file = req.file as IUploadFile;
  const uploadedImage = await FileUploadHelper.uploadToCloudinary(file);

  if (uploadedImage) {
    req.body.image = uploadedImage.secure_url;
  }

  const response: IGenericResponse = await coreService.post(`/categories`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getAllCategory = async (req: Request) => {
  const response: IGenericResponse = await coreService.get(`/categories`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const editCategory = async (req: Request) => {
  const file = req.file as IUploadFile;
  const uploadedImage = await FileUploadHelper.uploadToCloudinary(file);

  if (uploadedImage) {
    req.body.image = uploadedImage.secure_url;
  }

  const response: IGenericResponse = await coreService.patch(
    `/categories/${req.params.id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const deleteCategory = async (req: Request) => {
  const response: IGenericResponse = await coreService.delete(`/categories/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const CategoryService = {
  addCategory,
  getAllCategory,
  editCategory,
  deleteCategory
};
