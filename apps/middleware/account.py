from django.http import JsonResponse
from ..user.models import UserAccount


def check_account(response):
    print('check account')

    def check_token(request, *args, **kwargs):
        try:
            token = request.headers['Token'] if request.headers.get('Token') else 'not token'
            print('token -> ', token)
            user_account = UserAccount.objects.get(token=token)
        except UserAccount.DoesNotExist:
            return JsonResponse({'message': 'error access token is not valid!'}, status=401)

        print('email->', user_account.email)
        res = response(request, *args, **kwargs)

        return res

    return check_token


def user_access_perm(response):
    print('check access user.')

    def middleware(request, *args, **kwargs):
        res = response(request, *args, **kwargs)
        return res

    return middleware
