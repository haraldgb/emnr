# Generated by Django 2.2.2 on 2020-10-26 10:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0004_merge_20201028_1246'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='average_difficulty',
            field=models.FloatField(default=0),
        ),
        migrations.AddField(
            model_name='course',
            name='average_workload',
            field=models.FloatField(default=0),
        ),
    ]
