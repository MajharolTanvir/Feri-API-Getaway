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

const getAllProducts = async (req: Request) => {
  const response: IGenericResponse = await coreService.get(`/products`, {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getSingleProduct = async (req: Request) => {
  const response: IGenericResponse = await coreService.get(`/products/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const updateProduct = async (req: Request) => {
  const response: IGenericResponse = await coreService.patch(
    `/products/${req.params.id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const deleteProduct = async (req: Request) => {
  const response: IGenericResponse = await coreService.delete(`/products/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const ProductService = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct
};
