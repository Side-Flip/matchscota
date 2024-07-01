from rest_framework import serializers
from .models import Usuario, Mascota

class RegisterSerializer(serializers.Serializer):
    nombre = serializers.CharField(max_length=100)
    apellido = serializers.CharField(max_length=100)
    documento = serializers.CharField(max_length=20)
    telefono = serializers.CharField(max_length=20)
    email = serializers.EmailField()
    contraseña = serializers.CharField(write_only=True)

class LoginSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255)
    password = serializers.CharField(write_only=True)
