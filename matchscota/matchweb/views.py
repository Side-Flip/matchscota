from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from .forms import RegisterForm
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
