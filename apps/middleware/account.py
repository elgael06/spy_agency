
def check_account(response):
    '''
    :param response:
    :return middleware account:
    '''
    print('check account')

    def middleware(request, *args, **kwargs):
        '''
        :param request:
        :return response data:
        '''
        print('request', request)
        res = response(request, *args, **kwargs)
        return res

    return middleware
