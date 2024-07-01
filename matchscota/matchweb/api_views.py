from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegisterSerializer, LoginSerializer
from django.contrib.auth.models import User
from django.contrib.auth import login as auth_login
from django.contrib import messages
from rest_framework.permissions import IsAuthenticated
from db_connection import db
import bcrypt
import logging

logger = logging.getLogger(__name__)
class RegisterView(APIView):
    def post(self, request):
        form = RegisterForm(request.data)
        if form.is_valid():
            name = form.cleaned_data['name']
            password = form.cleaned_data['password']
            hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
            users_collection = db['User']
            users_collection.insert_one({'name': name, 'password': hashed_password})
            return Response({'message': 'Registration successful'}, status=status.HTTP_201_CREATED)
        return Response(form.errors, status=status.HTTP_400_BAD_REQUEST)

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
