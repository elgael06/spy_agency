from django.http import (
    JsonResponse,
    HttpResponse
)
import json
from rest_framework.decorators import api_view
from .serializers import (
    UserSerializer,
    UserAccountSerializer,
)
from .models import (
    User,
    UserAccount,
)
from ..middleware.account import check_account


@api_view(['POST'])
def user_account_login(request):

    data = json.loads(request.body) if request.body else {'email': '', 'password': ''}

    try:
        email = data['email'] if data['email'] else ''
        password = data['password'] if data['password'] else ''
        login = UserAccount.objects.get(email=email)

        if login.DoesNotExist:

            # check password account
            if login.check_password(password):
                # get and serializer user data info.
                user = login.get_user_where_email()
                user_serializer = UserSerializer(user)

                # Check user is out of system
                if user_serializer.data['is_out']:
                    return JsonResponse({'message': 'User not authorized!'}, status=401)

                # create token to account and get serializer data.
                login.create_token()
                login.save()
                account_serializer = UserAccountSerializer(login)

                return JsonResponse({
                    'message': 'Login user...',
                    'id_account': account_serializer.data['id'],
                    'token': account_serializer.data['token'],
                    'user': user_serializer.data,
                }, status=200)
            else:
                return JsonResponse({
                    'message': 'ERROR:password!'
                }, status=401)
        else:
            return HttpResponse(status=404)

    # User Not Exist Exception
    except UserAccount.DoesNotExist:
        return JsonResponse({
            'message': 'ERROR:email not exist!'
        }, status=501)


@api_view(['GET', 'POST'])
def user_account_logout(request, pk):
    user_account = UserAccount.get(pk=pk)
    user_account.create_token()
    return JsonResponse({'message': 'ok'}, status=200)


@api_view(['GET', 'POST'])
@check_account
def users_list(request):
    # user list active.
    users = User.objects.filter(is_out=False)
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


@api_view(['GET', 'PUT', 'DELETE'])
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
        print(request.body)
        data = _update_user_id(user=user, body=request.body)
    elif request.method == 'DELETE':
        user.delete()

    return JsonResponse({
        'message': 'user id',
        'data': data
    })


def _get_user_id(user):
    res = UserSerializer(user, many=False)
    return res.data


def _update_user_id(body='', user=User):
    data = json.loads(body) if body else dict()
    name = data.get('name')
    last_name = data.get('last_name')
    nike_name = data.get('nike_name')
    is_out = data.get('is_out')

    print(name, last_name, nike_name, is_out)
    if name:
        user.name = name
        user.update(update_fields=['name'])
    if last_name:
        user.last_name = last_name
        user.update(update_fields=['last_name'])
    if nike_name:
        user.nikename = nike_name
        user.update(update_fields=['nikename'])
    if not (is_out is None):
        user.is_out = is_out
        user.update(update_fields=['is_out'])

    res = UserSerializer(user, many=False)
    return res.data
