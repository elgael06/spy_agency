# Generated by Django 3.1 on 2021-08-20 01:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0010_auto_20210820_0652'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraccount',
            name='password',
            field=models.TextField(default='pbkdf2:sha256:150000$x2y1PquF$d4e844d14da6103c5668a293fc730dfc57b3ed0e3a6d7a509008c285d9394c9c'),
        ),
        migrations.AlterField(
            model_name='useraccount',
            name='token',
            field=models.TextField(default='pbkdf2:sha256:150000$aZRlOSEy$bc1c38e96961216265baa40b3b350c3de9c85000deb99f1341f3212c50167a1e'),
        ),
    ]
