from django.shortcuts import render
from django.http import (
    JsonResponse,
    HttpResponse
)
import json
from rest_framework.decorators import api_view
from ..middleware.account import check_account
from .models import (
    UserRole,
    MenusRole,
    LinksMenus,
)
# Create your views here.


@api_view(['GET'])
def rol_user(request, pk):
    print('pk->', pk)
    data = []
    try:
        #checamos el rol
        rol = UserRole.objects.get(user=pk)
        print('rol->', rol.check())
    except :
        return JsonResponse({'data': data, 'message': 'not rol access.'})
    # obtenemos menus de roll
    menus = MenusRole.objects.filter(role=rol.role_id)
    # recorremos los menus para obtener los links
    for menu in menus:
        payload = {
            'id': menu.menu_id,
            'name': menu.menu.name,
            'show':menu.show,
            'edit':menu.edit,
            'links': [],
        }
        links = LinksMenus.objects.filter(menu=menu.menu_id)
        for link in links:
            payload['links'].append({
                'id': link.link_id,
                'name': link.link.nameAccess,
                'url': link.link.url,
                'status': link.link.status,
            })
        data.append(payload)

    return JsonResponse({'message': 'list of roll user', 'data': data}, status=200)

