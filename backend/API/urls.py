from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import RestaurantViewSet, ItemCategoryViewSet, ItemViewSet, CartViewSet, CartItemViewSet, CouponViewSet, UserCouponViewSet, OrderViewSet, RestaurantRatingViewSet, ItemRatingViewSet

from .payments import secret

router = DefaultRouter()

router.register(r'restaurants', RestaurantViewSet, basename='restaurant')
router.register(r'item_categories', ItemCategoryViewSet, basename='cart_item')
router.register(r'items', ItemViewSet, basename='item')
router.register(r'carts', CartViewSet, basename='cart')
router.register(r'cart_items', CartItemViewSet, basename='cart_item')
router.register(r'coupons', CouponViewSet, basename='coupon')
router.register(r'user_coupons', UserCouponViewSet, basename='')
router.register(r'orders', OrderViewSet, basename='')
router.register(r'restaurant_ratings', RestaurantRatingViewSet, basename='')
router.register(r'item_ratings', ItemRatingViewSet, basename='')

urlpatterns = [path('', include(router.urls)),
path('secret/', secret) ]
