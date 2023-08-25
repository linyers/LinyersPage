from rest_framework import serializers
from .models import Post, Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class PostSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(many=True)

    class Meta:
        model = Post
        fields = ('id', 'title', 'body', 'slug','image', 'created_at', 'updated_at', 'categories')