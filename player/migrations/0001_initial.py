# Generated by Django 2.1.1 on 2018-09-20 09:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Teams',
            fields=[
                ('teamid', models.AutoField(primary_key=True, serialize=False)),
                ('teamname', models.CharField(max_length=45)),
                ('teamname_eng', models.CharField(blank=True, max_length=45, null=True)),
            ],
            options={
                'db_table': 'teams',
                'managed': False,
            },
        ),
    ]