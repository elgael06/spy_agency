from django.http import JsonResponse


def check_account(response):
    print('check account')

    def middleware(request, *args, **kwargs):
        try:
            r = request.headers['token']
            print('token => ', r)
            if r:
                res = response(request, *args, **kwargs)
        except:
            return JsonResponse({'message': 'access error!'}, status=401)
        return res

    return middleware


def user_access_perm(response):
    print('check access user.')

    def middleware(request, *args, **kwargs):
        res = response(request, *args, **kwargs)
        return res

    return middleware
