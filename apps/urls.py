
from django.urls import path, include

urlpatterns = [
    path('user/', include('apps.user.urls')),
    path('access/', include('apps.routes_access.urls')),
]

