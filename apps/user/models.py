from django.db import models


# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    nikename = models.CharField(max_length=20)
    email = models.EmailField(max_length=40)
    is_out = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)
    date_out = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['created']


class User_info(models.Model):
    pass
