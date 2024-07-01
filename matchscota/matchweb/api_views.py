from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegisterSerializer, LoginSerializer
from django.contrib.auth.models import User
from django.contrib.auth import login as auth_login
from django.contrib import messages
from rest_framework.permissions import IsAuthenticated
from django.views.decorators.csrf import csrf_protect, csrf_exempt
from django.utils.decorators import method_decorator
from rest_framework.permissions import AllowAny
from db_connection import db
import bcrypt



@method_decorator(csrf_exempt, name='dispatch')
class RegisterView(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            data = serializer.validated_data
            password = data['contraseña']
            hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

            users_collection = db['User']
            users_collection.insert_one({
                'Nombre': data['nombre'],
                'Apellido': data['apellido'],
                'Documento': data['documento'],
                'telefono': data['telefono'],
                'email': data['email'],
                'contraseña': hashed_password
            })
            return Response({'message': 'Registration successful'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)@csrf_exempt



class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            name = serializer.validated_data['name']
            password = serializer.validated_data['password']
            users_collection = db['User']
            user = users_collection.find_one({'name': name})

            if user and bcrypt.checkpw(password.encode('utf-8'), user['password']):
                user_obj, created = User.objects.get_or_create(username=name)
                user_obj.backend = 'django.contrib.auth.backends.ModelBackend'
                auth_login(request, user_obj)
                return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'Invalid username or password'}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        user = request.user
        return Response({'username':user.username}, status=status.HTTP_200_OK)
