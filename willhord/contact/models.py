from django.db import models

# Create your models here.

class ContactForm(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    message = models.TextField(max_length=10000)

    created = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name