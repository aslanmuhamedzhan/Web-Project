# Generated by Django 2.2 on 2021-04-30 18:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0015_auto_20210430_2340'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='productitem',
            name='feedback',
        ),
        migrations.AddField(
            model_name='feedback',
            name='product',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.ProductItem'),
        ),
    ]