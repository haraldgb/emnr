# Generated by Django 2.2.2 on 2020-10-29 09:30

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('course_code', models.CharField(max_length=20, primary_key=True, serialize=False)),
                ('course_name', models.CharField(max_length=200)),
                ('credit', models.FloatField()),
                ('average_grade', models.FloatField()),
                ('pass_rate', models.FloatField(default=None)),
                ('review_count', models.IntegerField(default=0)),
                ('average_review_score', models.FloatField(default=0)),
            ],
        ),
    ] 