from django.http import JsonResponse
from ..user.models import UserAccount


def check_account(response):
    print('check account')

    def check_token(request, *args, **kwargs):
        try:
            print('header->', request.headers)
            try:
                token = request.headers['Token'] if request.headers['Token'] else ''
            except:
                token = ''
            print('token => ', token)
            user_account = UserAccount.objects.filter(token=token).first()
            print('user->', user_account)
            if user_account:
                print('email->', user_account.email)
                res = response(request, *args, **kwargs)
                return res
            else:
                return JsonResponse({'message': 'error access user is not valid!'}, status=404)
        except UserAccount.DoesNotExist:
            return JsonResponse({'message': 'error access token is not valid!'}, status=401)

    return check_token


def user_access_perm(response):
    print('check access user.')

    def middleware(request, *args, **kwargs):
        res = response(request, *args, **kwargs)
        return res

    return middleware
