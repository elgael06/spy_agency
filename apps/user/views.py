from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view
from .serializers import UserSerializer
from .models import User
from ..middleware.account import check_account

# Create your views here.


@api_view(['GET', 'POST'])
@check_account
def users_list(request):
    # user list active.
    users = User.objects.filter(is_out=False)
    print('users', users)
    res = UserSerializer(users, many=True)
    print(res.data)
    return JsonResponse({'message':'list users', 'data': res.data})


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
    elif request.method == 'POST':
        data = _get_user_id(user=user)
    elif request.method == 'PUT':
        data = _get_user_id(user=user)
    elif request.method == 'DELETE':
        data = _get_user_id(user=user)
    return JsonResponse({
        'message': 'user id',
        'data': data
    })


def _get_user_id(user):
    res = UserSerializer(user, many=False)
    return res.data

