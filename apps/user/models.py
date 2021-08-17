from django.db import models
from uuid import uuid4
from werkzeug.security import generate_password_hash, check_password_hash

DEFAULT_PASSWORD = 'Async12@'


# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    nikename = models.CharField(max_length=20, unique=True)
    email = models.EmailField(max_length=40, unique=True)
    is_out = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)
    date_out = models.DateTimeField(auto_now_add=True)

    def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
        account = UserAccount(email=self.email)
        account.save()
        super(User, self).save(force_insert=False, force_update=False, using=None, update_fields=None)

    class Meta:
        ordering = ['created']


class UserInfo(models.Model):
    id_user = models.IntegerField(unique=True)
    cell_phone = models.CharField(max_length=10)
    address = models.TextField(default='')
    date = models.DateTimeField()


class UserAccount(models.Model):
    email = models.EmailField(max_length=40, unique=True)
    password = models.TextField(default=generate_password_hash(DEFAULT_PASSWORD))
    token = models.TextField(default=generate_password_hash(str(uuid4())))
    date_update = models.DateTimeField(auto_now_add=True)

    def change_password(self, new_value=DEFAULT_PASSWORD) -> str:
        self.password = generate_password_hash(new_value)
        return self.password

    def check_password(self, value) -> bool:
        return check_password_hash(self.password, value)

    def create_token(self) -> str:
        token = str(generate_password_hash(str(uuid4())))
        self.token = token
        return self.token

    def get_user_where_email(self) -> User:
        return User.objects.get(email=self.email)

