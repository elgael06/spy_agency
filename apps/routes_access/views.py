from django.shortcuts import render
from django.http import (
    JsonResponse,
    HttpResponse
)
import json
from rest_framework.decorators import api_view
from ..middleware.account import check_account
# Create your views here.


@api_view(['POST'])
@check_account
def rol_user(request, pk):
    print('pk->', pk)
    return JsonResponse({'message': 'list of roll user', 'data': []}, status=200)

