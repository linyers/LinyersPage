from rest_framework import serializers
from .models import Proyect


class ProyectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proyect
        fields = '__all__'