from django.shortcuts import render

from rest_framework.viewsets import GenericViewSet
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from .permissions import AllowAny, IsAdminUser, IsSuperUser

from .models import Restaurant, ItemCategory, Item, Cart, CartItem, Coupon, UserCoupon, Order, RestaurantRating, ItemRating
from .serializers import RestaurantSerializer, ItemCategorySerializer, ItemSerializer, CartSerializer, CartItemSerializer, CouponSerializer, UserCouponSerializer, OrderSerializer, RestaurantRatingSerializer, ItemRatingSerializer
# Create your views here.


class RestaurantViewSet(GenericViewSet):
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()

    def get_permissions(self):
        if self.action == 'list' or self.action == 'retrieve':
            permission_classes = [AllowAny]
            return [permission() for permission in permission_classes]
        elif self.action == 'create':
            permission_classes == [IsAdminUser]
            return [permission() for permission in permission_classes]
        else:
            permission_classes == [IsSuperUser]
            return [permission() for permission in permission_classes]

    def list(self, request):
        serializer = RestaurantSerializer(self.queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ItemCategoryViewSet(GenericViewSet):
    serializer_class = ItemCategorySerializer
    queryset = ItemCategory.objects.all()

    def get_permissions():
        if self.action == 'list' or self.action == 'retrieve':
            permission_classes = [AllowAny]
            return [permission() for permission in permission_classes]
        else:
            permission_classes == [IsAdminUser]
            return [permission() for permission in permission_classes]


class ItemViewSet(GenericViewSet):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()

    def get_permissions():
        if self.action == 'list' or self.action == 'retrieve':
            permission_classes = [AllowAny]
            return [permission() for permission in permission_classes]
        elif self.action == 'create':
            permission_classes == [IsAdminUser]
            return [permission() for permission in permission_classes]
        else:
            permission_classes == [IsSuperUser]
            return [permission() for permission in permission_classes]


class CartViewSet(GenericViewSet):
    serializer_class = CartSerializer
    queryset = Cart.objects.all()

    def get_permissions():
        if self.action == 'list' or self.action == 'retrieve':
            permission_classes = [AllowAny]
            return [permission() for permission in permission_classes]
        elif self.action == 'create':
            permission_classes == [IsAdminUser]
            return [permission() for permission in permission_classes]
        else:
            permission_classes == [IsSuperUser]
            return [permission() for permission in permission_classes]


class CartItemViewSet(GenericViewSet):
    serializer_class = CartItemSerializer
    queryset = CartItem.objects.all()

    def get_permissions():
        if self.action == 'list' or self.action == 'retrieve':
            permission_classes = [AllowAny]
            return [permission() for permission in permission_classes]
        elif self.action == 'create':
            permission_classes == [IsAdminUser]
            return [permission() for permission in permission_classes]
        else:
            permission_classes == [IsSuperUser]
            return [permission() for permission in permission_classes]


class CouponViewSet(GenericViewSet):
    serializer_class = CouponSerializer
    queryset = Coupon.objects.all()

    def get_permissions():
        if self.action == 'list' or self.action == 'retrieve':
            permission_classes = [AllowAny]
            return [permission() for permission in permission_classes]
        elif self.action == 'create':
            permission_classes == [IsAdminUser]
            return [permission() for permission in permission_classes]
        else:
            permission_classes == [IsSuperUser]
            return [permission() for permission in permission_classes]


class UserCouponViewSet(GenericViewSet):
    serializer_class = UserCouponSerializer
    queryset = UserCoupon.objects.all()

    def get_permissions():
        if self.action == 'list' or self.action == 'retrieve':
            permission_classes = [AllowAny]
            return [permission() for permission in permission_classes]
        elif self.action == 'create':
            permission_classes == [IsAdminUser]
            return [permission() for permission in permission_classes]
        else:
            permission_classes == [IsSuperUser]
            return [permission() for permission in permission_classes]


class OrderViewSet(GenericViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()

    def get_permissions():
        if self.action == 'list' or self.action == 'retrieve':
            permission_classes = [AllowAny]
            return [permission() for permission in permission_classes]
        elif self.action == 'create':
            permission_classes == [IsAdminUser]
            return [permission() for permission in permission_classes]
        else:
            permission_classes == [IsSuperUser]
            return [permission() for permission in permission_classes]


class RestaurantRatingViewSet(GenericViewSet):
    serializer_class = RestaurantRatingSerializer
    queryset = RestaurantRating.objects.all()

    def get_permissions():
        if self.action == 'list' or self.action == 'retrieve':
            permission_classes = [AllowAny]
            return [permission() for permission in permission_classes]
        elif self.action == 'create':
            permission_classes == [IsAdminUser]
            return [permission() for permission in permission_classes]
        else:
            permission_classes == [IsSuperUser]
            return [permission() for permission in permission_classes]


class ItemRatingViewSet(GenericViewSet):
    serializer_class = ItemRatingSerializer
    queryset = ItemRating.objects.all()

    def get_permissions():
        if self.action == 'list' or self.action == 'retrieve':
            permission_classes = [AllowAny]
            return [permission() for permission in permission_classes]
        elif self.action == 'create':
            permission_classes == [IsAdminUser]
            return [permission() for permission in permission_classes]
        else:
            permission_classes == [IsSuperUser]
            return [permission() for permission in permission_classes]
