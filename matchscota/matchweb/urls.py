from django.urls import path
from . import views
from .api_views import RegisterView, LoginView, UserProfileView, RegisterMascotaView
from django.views.decorators.csrf import ensure_csrf_cookie
from django.contrib.auth.views import LogoutView
from django.http import JsonResponse
from django.middleware.csrf import get_token

@ensure_csrf_cookie
def get_csrf_token(request):
    return JsonResponse({'csrfToken': get_token(request)})


urlpatterns = [
    path('', views.home, name='home'),
    path('register/', views.register, name='register'),
    path('login/', views.login, name='login'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('logout/', LogoutView.as_view(next_page='login'), name='logout'),
    path('dashboard/register_mascota/', views.register_mascota, name='register_mascota'),
    path('chat/', views.chat, name='chat'),
    path('search/', views.search, name='search'),
    path('api/register/', RegisterView.as_view(), name='api_register'),
    path('api/login/', LoginView.as_view(), name='api_login'),
    path('api/profile/', UserProfileView.as_view(), name='api_user'),
    path('api/get-csrf-token/', get_csrf_token, name='get-csfr-token'),
    path('api/register-mascota/', RegisterMascotaView.as_view(), name='register-mascota')
]