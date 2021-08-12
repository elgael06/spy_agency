from django.http import (
    JsonResponse,
    HttpResponse
)
import json
from rest_framework.decorators import api_view
from .serializers import UserSerializer
from .models import User
from ..middleware.account import check_account


@api_view(['GET', 'POST'])
@check_account
def users_list(request):
    # user list active.
    users = User.objects.filter(is_out=False)
    print('users', users)
    res = UserSerializer(users, many=True)
    print(res.data)
    return JsonResponse({'message': 'list users', 'data': res.data})


@api_view(['POST'])
def user_register(request):
    user = json.loads(request.body)
    res = UserSerializer(data=user)
    if res.is_valid():
        res.create(res.data)
        return JsonResponse({'message': 'user save!', 'data': res.data})
    else:
        return JsonResponse({'message': 'Error: save user...'})


@api_view(['GET', 'POST'])
@check_account
def user_id(request, pk):
    try:
        data = None
        user = User.objects.get(pk=pk)
    except User.DoesNotExist:
        return HttpResponse(status=404)
    if request.method == 'GET':
        data = _get_user_id(user=user)
    elif request.method == 'PUT':
        data = _get_user_id(user=user)
    elif request.method == 'DELETE':
        user.delete()

    return JsonResponse({
        'message': 'user id',
        'data': data
    })


def _get_user_id(user):
    res = UserSerializer(user, many=False)
    return res.data



