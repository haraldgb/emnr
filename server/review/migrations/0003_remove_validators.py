# Generated by Django 2.2.2 on 2020-10-22 12:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('review', '0002_review_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='difficulty',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='review',
            name='score',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='review',
            name='workload',
            field=models.IntegerField(),
        ),
    ]
