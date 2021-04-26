# Generated by Django 2.1.1 on 2019-05-25 07:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Players',
            fields=[
                ('playerid', models.AutoField(primary_key=True, serialize=False)),
                ('playername', models.CharField(max_length=45)),
                ('avg', models.DecimalField(decimal_places=3, max_digits=3)),
                ('h', models.IntegerField()),
                ('hr', models.IntegerField()),
                ('era', models.DecimalField(decimal_places=2, max_digits=4)),
                ('w', models.IntegerField()),
                ('sv', models.IntegerField()),
                ('rbi', models.IntegerField()),
                ('sb', models.IntegerField()),
                ('so', models.IntegerField()),
                ('hld', models.IntegerField()),
                ('ab', models.IntegerField()),
                ('ip', models.DecimalField(decimal_places=1, max_digits=4)),
            ],
            options={
                'db_table': 'players',
                'managed': False,
            },
        ),
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