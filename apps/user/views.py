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
from ..routes_access.models import (
    UserRole
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

                print('pk->',user.id)
                try:
                    role = UserRole.objects.get(user= user.id)
                    role_name = ''

                    print( role)
                    role_name = role.role.name if role else ''
                except :
                    role_name =''

                # Check user is out of system
                if user_serializer.data['is_out']:
                    return JsonResponse({'message': 'User not authorized!'}, status=401)

                # create token to account and get serializer data.
                login.create_token()
                login.save()
                account_serializer = UserAccountSerializer(login)

                return JsonResponse({
                    'message': 'Login user ok...',
                    'id_account': account_serializer.data['id'],
                    'token': account_serializer.data['token'],
                    'user': user_serializer.data,
                    'role': role_name,
                    'status':True,
                }, status=200)
            else:
                return JsonResponse({
                    'message': 'ERROR: password!',
                    'status':False,
                })
        else:
            return HttpResponse(status=404)

    # User Not Exist Exception
    except UserAccount.DoesNotExist:
        return JsonResponse({
            'message': 'ERROR:email not exist!',
            'status':False,
        })


@api_view(['GET'])
def user_account_logout(request, pk):
    user_account = UserAccount.objects.get(pk=pk)
    user_account.create_token()
    user_account.save(update_fields=['token'])
    return JsonResponse({'message': 'Logout success!'})


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
    try:
        user = json.loads(request.body)
        print('->', user)
        passwod = user.get('password') if user.get('password') else ''
        res = UserSerializer(data={
            'name': user.get('name'),
            'last_name': user.get('last_name'),
            'nikename': user.get('nikename'),
            'email': user.get('email'),
        })
        print('debug->', res.is_valid())
        print('->', res.data)
        res.create(res.data, passwod)

        return JsonResponse({'message': 'user save!', 'data': res.data})
    except res.is_valid():
        return JsonResponse({'message': 'Error: save user...'}, status=501)


@api_view(['GET', 'PUT', 'DELETE'])
@check_account
def user_id(request, pk):
    try:
        data = None
        user = User.objects.get(pk=pk)
    except User.DoesNotExist:
        return JsonResponse({'message': 'User not exist!'}, status=404)

    if request.method == 'GET':
        data = _get_user_id(user=user)
    elif request.method == 'PUT':
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
