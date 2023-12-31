from django.db import models
from django.conf import settings
import os


def proyect_pic_path(instance, filename):
    pic = 'proyect/{0}/pic.jpg'.format(instance.name)
    full_path = os.path.join(settings.MEDIA_ROOT, pic)

    if os.path.exists(full_path):
        os.remove(full_path)

    return pic


class Proyect(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=300, unique=False)
    image = models.ImageField(upload_to=proyect_pic_path, null=True, blank=True)
    description = models.TextField(blank=True, null=True)
    url = models.URLField()
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()
    pushed_at = models.DateTimeField()
    recomended = models.BooleanField(default=False)

    def __str__(self):
        return self.name