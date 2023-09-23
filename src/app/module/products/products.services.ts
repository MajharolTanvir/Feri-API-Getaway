import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { coreService } from '../../../shared/axios';
import { IUploadFile } from '../../../interfaces/file';
import { FileUploadHelper } from '../../../helpers/FileUploadHelper';

const createProduct = async (req: Request) => {
  const files = req.files as IUploadFile[];
  const uploadedImage = await FileUploadHelper.uploadToCloudinaryWithOptions(files);
  if (uploadedImage) {
    req.body.imageUrl = await uploadedImage.map((i) => i.secure_url);
  }
  const response: IGenericResponse = await coreService.post(`/products`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const ProductService = {
  createProduct
};
