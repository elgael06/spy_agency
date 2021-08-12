
def check_account(response):
    '''
    :param response:
    :return middleware account:
    '''
    print('check account')

    def middleware(request):
        '''
        :param request:
        :return response data:
        '''
        print('request', request)
        res = response(request)
        return res

    return middleware
