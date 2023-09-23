import { z } from 'zod';

const createProduct = z.object({
  product: z
    .object({
      title: z.string({
        required_error: 'Title is required'
      }),
      description: z.string({
        required_error: 'Description is required'
      }),
      brand: z.string({
        required_error: 'Brand is required'
      }),
      categoryId: z.string({
        required_error: 'Category is required'
      }),
      subCategoryId: z.string({
        required_error: 'Sub category is required'
      }),
      quantity: z.number({
        required_error: 'Quantity is required'
      }),
      inStoke: z.number({
        required_error: 'In stoke is required'
      }),
      mainPrice: z.number({
        required_error: 'Main price is required'
      }),
      discountPercentage: z.number({
        required_error: 'discountPercentage is required'
      })
    })
    .optional(),
  colorConnection: z
    .object({
      colorId: z.array(z.string()).optional()
    })
    .optional(),
  sizeConnection: z
    .object({
      sizeId: z.array(z.string()).optional()
    })
    .optional(),
  weightConnection: z
    .object({
      weightId: z.string().optional(),
      value: z.number().optional()
    })
    .optional(),
  tagsConnection: z
    .object({
      tagsId: z.array(z.string()).optional()
    })
    .optional(),
  freeDelivery: z
    .object({
      location: z.string().optional(),
      deliveryTime: z.string().optional()
    })
    .optional(),
  paidDelivery: z
    .object({
      charge: z.number().optional(),
      deliveryTime: z.string().optional()
    })
    .optional()
});

export const ProductValidation = {
  createProduct
};
