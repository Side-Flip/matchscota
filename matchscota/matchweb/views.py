from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from django.contrib.auth import login as auth_login, authenticate
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from .forms import RegisterForm, LoginForm
from db_connection import db
import bcrypt

# Create your views here.

def home(request):
    return render(request,'home.html')

def register(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            password = form.cleaned_data['password']
            #Encrypt the password
            hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
            # Store the user in MondoDB
            users_collection = db['User']
            users_collection.insert_one({'name':name, 'password':hashed_password})
            messages.success(request, 'Registration successful')
            return redirect('register')
    else:
        form = RegisterForm()

    return render(request, 'register.html', {'form':form})


def login(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            password = form.cleaned_data['password']

            # Check if the user exists in MongoDB
            users_collection = db['User']
            user = users_collection.find_one({'name': name})

            if user and bcrypt.checkpw(password.encode('utf-8'), user['password']):
                messages.success(request, 'Login successful!')

                # Create a Django User object for session handling
                user_obj, created = User.objects.get_or_create(username=name)
                user_obj.backend = 'django.contrib.auth.backends.ModelBackend'
                auth_login(request, user_obj)

                return redirect('dashboard')
            else:
                messages.error(request, 'Invalid username or password')
        else:
            messages.error(request, 'Invalid username or password')
    else:
        form = LoginForm()

    return render(request, 'login.html', {'form': form})

@login_required
def dashboard(request):
    return render(request, 'dashboard.html')
