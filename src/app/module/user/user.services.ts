import { Request } from 'express';
import { FileUploadHelper } from '../../../helpers/FileUploadHelper';
import { authService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';
import { IUploadFile } from '../../../interfaces/file';

const createUser = async (req: Request) => {
  const response: IGenericResponse = await authService.post('/users/signup', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const userProfile = async (req: Request) => {
  const file = req.file as IUploadFile;
  const uploadedImage = await FileUploadHelper.uploadToCloudinary(file);

  if (uploadedImage) {
    req.body.profileImage = uploadedImage.secure_url;
  }

  const response: IGenericResponse = await authService.post('/users', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

export const UserService = {
  createUser,
  userProfile
};
