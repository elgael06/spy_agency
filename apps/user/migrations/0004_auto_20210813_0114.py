# Generated by Django 3.1 on 2021-08-12 19:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0003_auto_20210812_1138'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserAccount',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=40, unique=True)),
                ('password', models.TextField(default='pbkdf2:sha256:150000$FNejK6Ne$02bada8a2328350ff9fef0e7d2c087fb1729de751db32457c553fb5ceb90030d')),
                ('token', models.TextField(default='pbkdf2:sha256:150000$IZ9fGXmt$996af2c1e1a16e6362dd1b67b2a507f111d0c0d75b1ef1f6497833ea19c980c2')),
                ('date_update', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='UserInfo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('id_user', models.IntegerField(unique=True)),
                ('cell_phone', models.CharField(max_length=10)),
                ('address', models.TextField(default='')),
                ('date', models.DateTimeField()),
            ],
        ),
        migrations.DeleteModel(
            name='User_info',
        ),
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(max_length=40, unique=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='nikename',
            field=models.CharField(max_length=20, unique=True),
        ),
    ]