from django.shortcuts import render

from rest_framework.viewsets import GenericViewSet
from rest_framework.decorators import action, api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from .permissions import AllowAny, IsAdminUser, IsSuperUser, IsSelf

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
            permission_classes = [IsAdminUser]
            return [permission() for permission in permission_classes]

    def list(self, request):
        serializer = RestaurantSerializer(self.queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def create(self, request):
        serializer = RestaurantSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(owner = request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 


class ItemCategoryViewSet(GenericViewSet):
    serializer_class = ItemCategorySerializer
    queryset = ItemCategory.objects.all()

    def get_permissions():
        if self.action == 'list' or self.action == 'retrieve':
            permission_classes = [AllowAny]
            return [permission() for permission in permission_classes]
        else:
            permission_classes = [IsAdminUser]
            return [permission() for permission in permission_classes]

    def list(self, request):
        serializer = ItemCategorySerializer(self.queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def create(self, request):
        serializer = ItemCategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 



class ItemViewSet(GenericViewSet):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()

    def get_permissions():
        if self.action == 'list' or self.action == 'retrieve':
            permission_classes = [AllowAny]
            return [permission() for permission in permission_classes]
        elif self.action == 'create':
            permission_classes = [IsAdminUser]
            return [permission() for permission in permission_classes]

    def list(self, request):
        serializer = ItemSerializer(self.queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def create(self, request):
        serializer = ItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 


class CartViewSet(GenericViewSet):
    serializer_class = CartSerializer
    def get_queryset(self):
        """
        This view should return a list of all the carts
        for the currently authenticated user.
        """
        user = self.request.user
        return Purchase.objects.filter(user=user)

    def get_permissions():
        if self.action == 'list' or self.action == 'retrieve':
            permission_classes = [IsAuthenticated]
            return [permission() for permission in permission_classes]
        elif self.action == 'create':
            permission_classes = [IsAuthenticated]
            return [permission() for permission in permission_classes]

    def list(self, request):
        serializer = CartSerializer(self.queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def create(self, request):
        serializer = CartSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 


class CartItemViewSet(GenericViewSet):
    serializer_class = CartItemSerializer
    queryset = CartItem.objects.all()

    def get_permissions():
        if self.action == 'list' or self.action == 'retrieve':
            permission_classes = [AllowAny]
            return [permission() for permission in permission_classes]
        elif self.action == 'create':
            permission_classes = [IsAdminUser]
            return [permission() for permission in permission_classes]

    def list(self, request):
        serializer = CartItemSerializer(self.queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def create(self, request):
        serializer = CartItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 


class CouponViewSet(GenericViewSet):
    serializer_class = CouponSerializer
    queryset = Coupon.objects.all()

    def get_permissions():
        if self.action == 'list' or self.action == 'retrieve':
            permission_classes = [AllowAny]
            return [permission() for permission in permission_classes]
        elif self.action == 'create':
            permission_classes = [IsAdminUser]
            return [permission() for permission in permission_classes]

    def list(self, request):
        serializer = CouponSerializer(self.queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def create(self, request):
        serializer = CouponSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 


class UserCouponViewSet(GenericViewSet):
    serializer_class = UserCouponSerializer
    queryset = UserCoupon.objects.all()

    def get_permissions():
        if self.action == 'list' or self.action == 'retrieve':
            permission_classes = [IsSelf]
            return [permission() for permission in permission_classes]
        elif self.action == 'create':
            permission_classes = [IsAdminUser]
            return [permission() for permission in permission_classes]

    def list(self, request):
        serializer = UserCouponSerializer(self.queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def create(self, request):
        serializer = UserCouponSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 


class OrderViewSet(GenericViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()
    
    def get_queryset(self):
        """
        This view should return a list of all the Orders
        for the currently authenticated user.
        """
        user = self.request.user
        return Purchase.objects.filter(user=user)


    def get_permissions():
        if self.action == 'create':
            permission_classes = [IsAuthenticated]
            return [permission() for permission in permission_classes]
        else:
            permission_classes = [IsAuthenticated]
            return [permission() for permission in permission_classes]

    def list(self, request):
        serializer = OrderSerializer(self.queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def create(self, request):
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 


class RestaurantRatingViewSet(GenericViewSet):
    serializer_class = RestaurantRatingSerializer
    queryset = RestaurantRating.objects.all()

    def get_permissions():
        if self.action == 'list' or self.action == 'retrieve':
            permission_classes = [AllowAny]
            return [permission() for permission in permission_classes]
        elif self.action == 'create' or self.action == 'destroy':
            permission_classes = [IsAuthenticated]
            return [permission() for permission in permission_classes]
        else:
            permission_classes = [IsSuperUser]
            return [permission() for permission in permission_classes]

    def list(self, request):
        serializer = RestaurantRatingSerializer(self.queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def create(self, request):
        serializer = RestaurantRatingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 


class ItemRatingViewSet(GenericViewSet):
    serializer_class = ItemRatingSerializer
    queryset = ItemRating.objects.all()

    def get_permissions():
        if self.action == 'list' or self.action == 'retrieve':
            permission_classes = [AllowAny]
            return [permission() for permission in permission_classes]
        elif self.action == 'create' or self.action == 'destroy':
            permission_classes = [IsAuthenticated]
            return [permission() for permission in permission_classes]
        else:
            permission_classes = [IsSuperUser]
            return [permission() for permission in permission_classes]

    def list(self, request):
        serializer = ItemRatingSerializer(self.queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def create(self, request):
        serializer = ItemRatingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
