from django.db import models

# Create your models here.

class Device(models.Model):
    name = models.CharField(max_length=100)
    state = models.BooleanField(default=False)
    
    def __str__(self):
        return self.name
    
class Lights(models.Model):
    name = models.CharField(max_length=100)
    state = models.BooleanField(default=False)
    
    def __str__(self):
        return self.name
# class Action(models.Model):
#     name = models.CharField(max_length=100)
#     state = models.BooleanField(default=False)
#     # device = models.ForeignKey(
#     #     Device, related_name="action", on_delete=models.CASCADE
#     # )
    
#     def __str__(self):
#         return self.name