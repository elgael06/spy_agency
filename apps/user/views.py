from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from .serializers import UserSerializer
from .models import User
from ..middleware.account import check_account


@api_view(['GET', 'POST'])
@check_account
def users_list(request):
    users = User.objects.all()
    res = UserSerializer(users, many=True)
    print(res.data)
    return JsonResponse({'message':'list users', 'data': res.data})
