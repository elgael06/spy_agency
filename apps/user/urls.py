
from django.urls import path
from .views import (users_list, user_id, user_register)


urlpatterns = [
    path('', users_list),
    path('<int:pk>', user_id),
    path('register', user_register)
]