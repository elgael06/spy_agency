from django.urls import path, include

urlpatterns = [
    path('access/', include('apps.user.urls'))
]

