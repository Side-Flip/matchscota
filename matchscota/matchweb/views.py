from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.http import JsonResponse
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from django.contrib.auth import login as auth_login, authenticate
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from .forms import RegisterForm, LoginForm, MascotaForm
from django.views.decorators.csrf import ensure_csrf_cookie
from django.utils.decorators import method_decorator
from django.views import View
from db_connection import db
from bson import ObjectId
import bcrypt
import json

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

@login_required
def register_mascota(request):
    if request.method == 'POST':
        form = MascotaForm(request.POST)
        if form.is_valid():
            # extraer los campos del formulario
            nombre = form.cleaned_data['nombre']
            tipo = form.cleaned_data['tipo']
            raza = form.cleaned_data['raza']
            edad = form.cleaned_data['edad']
            sexo = form.cleaned_data['sexo']
            foto = form.cleaned_data['foto']
            '''
            esquema_vacunacion = form.cleaned_data['esquema_vacunacion']
            try:
                esquema_vacunacion = json.loads(esquema_vacunacion)
            except json.JSONDecodeError:
                messages.error(request, 'El esquema de vacunacion debe ser un JSON valido')
                return render(request, 'register_mascota.html', {'form':form})
            '''
            # Insertar mascota en mongo
            user_obj = User.objects.get(username=request.user.username)
            user_mongo = db['User'].find_one({'name': user_obj.username})
            id_usuario = user_mongo['_id']
            mascotas_collection = db['Mascota']
            mascota = {
                'nombre': nombre,
                'id_usuario': id_usuario,
                'tipo': tipo,
                'raza': raza,
                'edad': edad,
                'sexo': sexo,
                #'esquema_vacunacion': esquema_vacunacion,
                'foto': foto
            }
            mascotas_collection.insert_one(mascota)
            messages.success(request, 'el registro ha sido exitoso')
            return redirect('dashboard')
    else:
        form = MascotaForm()
    return render(request, 'register_mascota.html', {'form': form})

@login_required
def chat(request):
    context = {}
    return render(request, "chat.html", context)

@login_required
def search(request):
    query = {}
    nombre = request.GET.get('nombre','')
    edad = request.GET.get('edad','')
    sexo = request.GET.get('sexo','')
    raza = request.GET.get('raza','')
    tipo = request.GET.get('tipo','')
    
    mascotas_collection = db['Mascota']
    usuarios_collection = db['User']

    #Resultados de la busqueda
    results = []
    #Construir el filtro de busqueda
    if nombre:
        query['nombre'] = {'$regex': nombre, '$options': 'i'}
    if edad:
        try:
            query['edad'] = int(edad)
        except ValueError:
            pass
    if sexo:
        query['sexo'] = {'$regex': sexo, '$options': 'i'}
    if raza:
        query['raza'] = {'$regex': raza, '$options': 'i'}
    if tipo:
        query['tipo'] = {'$regex': tipo, '$options': 'i'}

    mascotas = mascotas_collection.find(query)
    for mascota in mascotas:
        usuario = usuarios_collection.find_one({'_id': mascota['id_usuario']})
        if usuario:
            results.append({
                'nombre': mascota['nombre'],
                'tipo': mascota['tipo'],
                'raza': mascota['raza'],
                'edad': mascota['edad'],
                'sexo': mascota['sexo'],
                'usuario': usuario['name']
            })
    return JsonResponse({'resultado':results})