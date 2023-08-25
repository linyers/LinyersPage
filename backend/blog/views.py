from django.shortcuts import render
from rest_framework import viewsets

from .serializers import PostSerializer, CategorySerializer
from .models import Post, Category


class PostsViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()

    def get_queryset(self):
        params = self.request.query_params
        if not params.get('categories'):
            return super().get_queryset()
        
        categories = params.get('categories')
        categories_id = [int(i) for i in categories.split(',')]

        queryset = Post.objects.filter(categories__in=categories_id)

        return queryset


class CategoryViewSet(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()