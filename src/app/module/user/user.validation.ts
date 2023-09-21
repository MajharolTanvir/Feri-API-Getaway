import { z } from 'zod';
import { roles } from '../../../interfaces/roleStatus';

const createUser = z.object({
  body: z.object({
    firstName: z.string({
      required_error: 'First name is required'
    }),
    lastName: z.string({
      required_error: 'Last name is required'
    }),
    email: z.string({
      required_error: 'Email is required'
    }),
    password: z.string({
      required_error: 'Password is required'
    }),
    role: z.enum([...roles] as [string, ...string[]], {
      required_error: 'Role is required'
    }),
    token: z.string().optional()
  })
});
const updateUser = z.object({
  body: z.object({
    password: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    dateOfBirth: z.string().optional(),
    gender: z.string().optional(),
    email: z.string().email().optional(),
    contactNo: z.string().optional(),
    emergencyContactNo: z.string().optional(),
    presentAddress: z.string().optional(),
    permanentAddress: z.string().optional()
  })
});

export const UserValidation = {
  createUser,
  updateUser
};
