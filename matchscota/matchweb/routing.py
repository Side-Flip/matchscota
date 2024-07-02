from django.urls import path , include
from matchweb.consumers import ChatConsumer

websocket_urlpatterns = [
    path("" , ChatConsumer.as_asgi()) , 
] 