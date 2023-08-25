from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PostsViewSet, CategoryViewSet

app_name = 'blog'

router = DefaultRouter()
router.register(r'posts', PostsViewSet, basename='post')
router.register(r'categories', CategoryViewSet, basename='category')

urlpatterns = [
    path("", include(router.urls))
]