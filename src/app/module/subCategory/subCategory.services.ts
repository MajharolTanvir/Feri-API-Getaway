import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { coreService } from '../../../shared/axios';

const addSubCategory = async (req: Request) => {
  const response: IGenericResponse = await coreService.post(`/subcategories`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getAllSubCategory = async (req: Request) => {
  const response: IGenericResponse = await coreService.get(`/subcategories`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const editSubCategory = async (req: Request) => {
  const response: IGenericResponse = await coreService.patch(
    `/subcategories/${req.params.id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const deleteSubCategory = async (req: Request) => {
  const response: IGenericResponse = await coreService.delete(`/subcategories/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
export const SubCategoryService = {
  addSubCategory,
  getAllSubCategory,
  editSubCategory,
  deleteSubCategory
};
