# Generated by Django 3.1 on 2021-08-20 00:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0009_auto_20210820_0651'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraccount',
            name='password',
            field=models.TextField(default='pbkdf2:sha256:150000$EnVwOnnf$026a11521275d9c0b200494b4040d7973cf5e612073e87451b82ac1f6afc3a5d'),
        ),
        migrations.AlterField(
            model_name='useraccount',
            name='token',
            field=models.TextField(default='pbkdf2:sha256:150000$ZUOqJV9V$339f92cd2921faf8fa612183a023f129390b69621ada8a0aa0e0db2a87ab0af4'),
        ),
    ]
