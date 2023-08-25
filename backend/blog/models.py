from django.db import models
from django.conf import settings
from django.db.models.signals import pre_save
from django.utils.text import slugify
from ckeditor.fields import RichTextField
import uuid
import os


def post_pic_path(instance, filename):
    image = 'post/{0}/image.jpg'.format(instance.name)
    full_path = os.path.join(settings.MEDIA_ROOT, image)

    if os.path.exists(full_path):
        os.remove(full_path)

    return image


class Category(models.Model):
    name = models.CharField(max_length=150, unique=True)

    def __str__(self):
        return self.name


class Post(models.Model):
    title = models.CharField(max_length=150)
    body = RichTextField()
    slug = models.SlugField(max_length=300, unique=True)
    image = models.ImageField(upload_to=post_pic_path, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    categories = models.ManyToManyField(Category, blank=True,)

    def __str__(self):
        return self.title


def set_slug(sender, instance, *args, **kwargs):
    if instance.slug:
        return
    
    id = str(uuid.uuid4())
    title = str(instance.title).replace(' ', '-')
    instance.slug = slugify(f'{id[:8]}_{title}')


pre_save.connect(set_slug, sender=Post)