from django.db import models

# Create your models here.

class Usuario(models.Model):
    nombre = models.CharField(max_length=100)
    email = models.EmailField(unique=True)

class Mascota(models.Model):
    nombre = models.CharField(max_length=100)
    tipo = models.CharField(max_length=50)
    dueño = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    sexo = models.CharField(max_length=50)
    raza = models.CharField(max_length=50)
    edad = models.IntegerField(max_length=50)
    foto = models.URLField(max_length=200)