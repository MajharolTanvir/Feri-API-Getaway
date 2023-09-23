import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import * as fs from 'fs';
import { ICloudinaryResponse, IUploadFile } from '../interfaces/file';
import ApiError from '../errors/apiError';
import httpStatus from 'http-status';

cloudinary.config({
  cloud_name: 'dt8q36rcg',
  api_key: '156776243979495',
  api_secret: 'iJcAFhrrGCg_N2ubLLqkZgQ30Mc'
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

const uploadToCloudinary = async (file: IUploadFile): Promise<ICloudinaryResponse | undefined> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(file.path, (error: Error, result: ICloudinaryResponse) => {
      fs.unlinkSync(file.path);
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

const uploadToCloudinaryWithOptions = async (
  files: IUploadFile[]
): Promise<ICloudinaryResponse[]> => {
  try {
    const uploadPromises = files.map((file) => {
      return new Promise<ICloudinaryResponse>((resolve, reject) => {
        cloudinary.uploader.upload(
          file.path,
          {
            transformation: [
              { height: 600, width: 600, crop: 'thumb' },
              {
                color: '#0F18496B',
                overlay: {
                  font_family: 'arial',
                  font_size: 80,
                  font_weight: 'bold',
                  text_align: 'left',
                  text: 'FERI'
                }
              },
              { flags: 'layer_apply', gravity: 'south', y: 80 }
            ]
          },
          (error: any, result: any) => {
            fs.unlinkSync(file.path);
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        );
      });
    });
    const results = await Promise.all(uploadPromises);
    return results;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, error as any);
  }
};

export const FileUploadHelper = {
  uploadToCloudinary,
  upload,
  uploadToCloudinaryWithOptions
};
