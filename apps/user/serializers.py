from .models import User
from rest_framework.serializers import (
    ModelSerializer,
    IntegerField,
    CharField,
    DateTimeField,
    BooleanField
)
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser


class UserSerializer(ModelSerializer):
    id = IntegerField(read_only=True)
    name = CharField(default='')
    last_name = CharField(max_length=30)
    nikename = CharField(max_length=20)
    email = CharField(max_length=40)
    is_out = BooleanField(default=False)
    created = DateTimeField(read_only=True)
    date_out = DateTimeField(read_only=True)

    class Meta:
        model = User
        fields = [ 'id', 'name', 'last_name', 'nikename', 'email', 'is_out', 'created', 'date_out' ]