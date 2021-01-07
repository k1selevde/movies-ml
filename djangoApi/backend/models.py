from django.db import models

# Create your models here.


class Movie(models.Model):
    name = models.CharField(max_length=80)
    author = models.CharField(max_length=80)
    description = models.CharField(max_length=80)