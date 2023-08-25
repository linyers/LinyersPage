from django.contrib import admin
from .models import Post, Category

class PostManagerAdmin(admin.ModelAdmin):
    exclude = ('slug',)

admin.site.register(Post, PostManagerAdmin)
admin.site.register(Category)