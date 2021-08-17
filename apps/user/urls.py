
from django.urls import path
from .views import (
    users_list,
    user_id,
    user_register,
    user_account_login,
    user_account_logout
)


urlpatterns = [
    path('', users_list),
    path('<int:pk>', user_id),
    path('register', user_register),
    path('account/login', user_account_login),
    path('account/logout/<int:pk>', user_account_logout)
]