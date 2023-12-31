import express from 'express';
import { UserRouter } from '../module/user/user.route';
import { CategoryRoutes } from '../module/category/category.router';
import { SubCategoryRoutes } from '../module/subCategory/subCategory.router';
import { ColorRouter } from '../module/color/color.router';
import { SizesRouter } from '../module/size/size.router';
import { WeightRouter } from '../module/weight/weight.router';
import { TagsRouter } from '../module/tags/tags.router';
import { ProductRouter } from '../module/products/products.router';
import { AddToCartRouter } from '../module/addToCart/addToCart.Router';
import { BookingRouter } from '../module/booking/booking.router';
import { ReviewsRouter } from '../module/review/review.router';
import { GlobalDiscountRouter } from '../module/globalDiscounts/globalDiscounts.router';
import { LocalDiscountRouter } from '../module/localDiscount/localDiscount.router';
import { PromotionRouter } from '../module/promotion/promotion.router';
import { BlogRouter } from '../module/blog/blog.router';
import { FeedbackRouter } from '../module/feedback/feedback.router';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRouter
  },
  {
    path: '/categories',
    route: CategoryRoutes
  },
  {
    path: '/subcategories',
    route: SubCategoryRoutes
  },
  {
    path: '/colors',
    route: ColorRouter
  },
  {
    path: '/sizes',
    route: SizesRouter
  },
  {
    path: '/weights',
    route: WeightRouter
  },
  {
    path: '/tags',
    route: TagsRouter
  },
  {
    path: '/products',
    route: ProductRouter
  },
  {
    path: '/add-to-cart',
    route: AddToCartRouter
  },
  {
    path: '/bookings',
    route: BookingRouter
  },
  {
    path: '/reviews',
    route: ReviewsRouter
  },
  {
    path: '/global-discounts',
    route: GlobalDiscountRouter
  },
  {
    path: '/local-discounts',
    route: LocalDiscountRouter
  },
  {
    path: '/promotions',
    route: PromotionRouter
  },
  {
    path: '/blogs',
    route: BlogRouter
  },
  {
    path: '/feedbacks',
    route: FeedbackRouter
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
