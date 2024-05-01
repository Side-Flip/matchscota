from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from db_connection import db

# Create your views here.

def home(request):
    return HttpResponse('<h1>hello world</h1>')


