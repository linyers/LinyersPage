from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        if user.is_email_confirmed:
            token = super().get_token(user)
            token['email'] = user.email
            return token
        raise serializers.ValidationError({'Email Confirm': 'Please confirm your email address. Note: Check spam!'}) 