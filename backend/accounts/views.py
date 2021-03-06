from django.shortcuts import render

from rest_framework.viewsets import GenericViewSet
from rest_framework.permissions import IsAuthenticated, BasePermission, AllowAny
from rest_framework import status
from rest_framework.response import Response

from .serializers import UserSerializer

from .models import User
# Create your views here.


class UserViewSet(GenericViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def get_permissions(self):
        """
        Instantiates and returns the list of permissions that this view requires.
        """
        if self.action == 'create':
            permission_classes = [AllowAny]
        elif self.action == 'retrieve':
            permission_classes = [IsAuthenticated]
        else:
            permission_classes = []
        return [permission() for permission in permission_classes]

    def create(self, request):
        serializer = UserSerializer(data=request.data)
        if User.objects.filter(phone=request.data['phone']).exists() or User.objects.filter(phone=request.data['email']).exists():
            return Response(serializer.errors, status=status.HTTP_409_CONFLICT)
        if serializer.is_valid():
            user = serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def list(self, request):
        user = User.objects.get(email=request.user)
        data = {}
        data['id'] = user.id
        data['name'] = user.name
        data['email'] = user.email
        return Response(data, status=status.HTTP_200_OK)
