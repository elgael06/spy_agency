from django.urls import path, include
from .views import rol_user
urlpatterns = [
    path('routes/<int:pk>', rol_user),
]

