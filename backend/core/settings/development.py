from .base import *

SECRET_KEY = 'django-insecure-g&906mhjr0fvw2mgg3-edr)5@%$xtci9c2ck-60veq^+1w**y3'

DEBUG = True

ALLOWED_HOSTS = []

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

MEDIA_ROOT = Path.joinpath(BASE_DIR, 'media')
STATIC_ROOT = Path.joinpath(BASE_DIR,'static')

AWS_ACCESS_KEY_ID = 'AKIA6QFL6LNHJA55UBMU'
AWS_SECRET_ACCESS_KEY = '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'
AWS_STORAGE_BUCKET_NAME = 'linyerspage'
AWS_S3_SIGNATURE_NAME = 's3v4'
AWS_S3_REGION_NAME = 'us-east-2'
AWS_S3_FILE_OVERWRITE = True
AWS_DEFAULT_ACL =  None
AWS_S3_VERITY = True
DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'