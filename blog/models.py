from django.db import models


# Create your models here.

class Course(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.FloatField()
    image = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.name

    def get_limit_description(self):
        return self.description[:100]
