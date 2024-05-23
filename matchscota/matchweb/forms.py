from django import forms

class RegisterForm(forms.Form):
    name = forms.CharField(max_length=100)
    password = forms.CharField(widget=forms.PasswordInput())