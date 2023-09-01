from django.contrib import admin
from core.settings.production import ADMIN_URL
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include

urlpatterns = [
    path(f'{ADMIN_URL}/', admin.site.urls),
    path('api/', include('projects.urls', namespace='projects')),
    path('api/', include('blog.urls', namespace='blog')),
    path('api/tokens/', include('base.urls', namespace='base')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
