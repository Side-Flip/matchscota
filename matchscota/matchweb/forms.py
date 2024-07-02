from django import forms

class RegisterForm(forms.Form):
    name = forms.CharField(max_length=100)
    password = forms.CharField(widget=forms.PasswordInput())

class LoginForm(forms.Form):
    name = forms.CharField(max_length=100)
    password = forms.CharField(widget=forms.PasswordInput())

class MascotaForm(forms.Form):
    tipo = forms.CharField(max_length=100)
    nombre = forms.CharField(max_length=100)
    edad = forms.IntegerField()
    raza = forms.CharField(max_length=100, required=False)
    sexo = forms.CharField(max_length=100)
    foto = forms.URLField()
    #esquema_vacunacion = forms.CharField(widget=forms.Textarea, help_text="Ingrese las vacunas en formato JSON")
