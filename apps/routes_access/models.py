
from django.db import models

from apps.user.models import User


class Links(models.Model):
    url = models.TextField()
    nameAccess = models.TextField()
    status = models.BooleanField(default=True)


class Menus(models.Model):
    name = models.TextField()
    status = models.BooleanField(default=False)


class LinksMenus(models.Model):
    menu = models.ForeignKey(Menus, on_delete=models.CASCADE)
    link = models.ForeignKey(Links, on_delete=models.CASCADE)


class Role(models.Model):
    name = models.TextField()
    status = models.BooleanField(default=False)


class MenusRole(models.Model):
    menu = models.ForeignKey(Menus, on_delete=models.CASCADE)
    role = models.ForeignKey(Role, on_delete=models.CASCADE)
    show = models.BooleanField(default=True)
    edit = models.BooleanField(default=False)
    status = models.BooleanField(default=True)


class UserRole(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    role = models.ForeignKey(Role, on_delete=models.CASCADE)

