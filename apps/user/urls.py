
from django.urls import path
from .views import (users_list, user_id)


urlpatterns = [
    path('', users_list),
    path('<int:pk>', user_id)
]