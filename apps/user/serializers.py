from .models import (
    User,
    UserAccount
)
from rest_framework.serializers import (
    ModelSerializer,
    IntegerField,
    CharField,
    DateTimeField,
    BooleanField
)


class UserSerializer(ModelSerializer):
    id = IntegerField(read_only=True)
    name = CharField(default='')
    last_name = CharField(max_length=30)
    nikename = CharField(max_length=20)
    email = CharField(max_length=40)
    is_out = BooleanField(default=False)
    created = DateTimeField()
    date_out = DateTimeField()

    def create(self, validate_data, password) -> User:
        user = User.objects.create(**validate_data)
        account = UserAccount.objects.get(email=user.email)
        if password != '':
            account.password = account.change_password(password)
            account.save(update_fields=['password'])
        return user

    def update(self, instance, validated_data) -> User:
        instance.name = validated_data.get('name', instance.name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.nikename = validated_data.get('nikename', instance.nikename)
        instance.email = validated_data.get('email', instance.email)
        instance.save()

        return instance

    class Meta:
        model = User
        fields = ['id', 'name', 'last_name', 'nikename', 'email', 'is_out', 'created', 'date_out']


class UserAccountSerializer(ModelSerializer):
    email = CharField(max_length=40)
    password = CharField(default='')
    token = CharField(default='')
    date_update = DateTimeField()

    class Meta:
        model = UserAccount
        fields = ['id', 'email', 'password', 'token', 'date_update']


