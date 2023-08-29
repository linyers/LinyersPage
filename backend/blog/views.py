from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAdminUser, AllowAny

from .pagination import CustomPostsPagination
from .serializers import PostSerializer, CategorySerializer
from .models import Post, Category


class CustomModelViewSet(viewsets.ModelViewSet):
    def get_permissions(self):
        if self.action == 'list' or self.action == 'retrieve':
            permission_classes = [AllowAny,]
        else:
            permission_classes = [IsAdminUser,]
        return [permission() for permission in permission_classes]


class PostsViewSet(CustomModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all().order_by('-created_at')
    pagination_class = CustomPostsPagination

    def get_queryset(self):
        params = self.request.query_params
        if params.get('category'):        
            category = params.get('category')

            queryset = Post.objects.filter(categories__name=category).order_by('-created_at')

            return queryset
        
        elif params.get('slug'):
            slug = params.get('slug')
            queryset = Post.objects.filter(slug=slug)

            return queryset

        return super().get_queryset()


class CategoryViewSet(CustomModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()