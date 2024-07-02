"""
ASGI config for matchscota project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/asgi/
"""

import os
from channels.routing import ProtocolTypeRouter
from django.core.asgi import get_asgi_application
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter , URLRouter
from matchweb import routing


django_asgi_app = get_asgi_application()

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'matchscota.settings')
application = ProtocolTypeRouter(
    {
    "http": django_asgi_app,
    "websocket":AuthMiddlewareStack(
        URLRouter(
            routing.websocket_urlpatterns
            )
        )
    }
)
ASGI_APPLICATION = 'matchscota.asgi.application'