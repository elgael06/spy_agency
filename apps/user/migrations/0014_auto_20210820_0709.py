# Generated by Django 3.1 on 2021-08-20 01:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0013_auto_20210820_0704'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraccount',
            name='password',
            field=models.TextField(default='pbkdf2:sha256:150000$RkR8PoRa$da76ac464e577a023aa500409766c204e1034a5669a99e0f6eca400b59528b18'),
        ),
        migrations.AlterField(
            model_name='useraccount',
            name='token',
            field=models.TextField(default='pbkdf2:sha256:150000$JoosLHDV$0a94abc6b27ff49f2d8702f2ae73a8ef73d51a2e46999ed23369a193558b0e57'),
        ),
    ]
