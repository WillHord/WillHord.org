from django.db import models
from versatileimagefield.fields import VersatileImageField, PPOIField

# Create your models here.

# class Image(models.Model):
#     name = models.CharField(max_length=255)
#     image = VersatileImageField(
#         'Image',
#         upload_to='images/',
#         ppoi_field='image_ppoi'
#     )
#     image_ppoi = PPOIField()

#     def __str__(self):
#         return self.name


class ProjectImage(models.Model):
    name = models.CharField(max_length=255)
    content = models.TextField()
    # category = models.ManyToManyField(Category, related_name='ProjectImage')
    created = models.DateField(auto_now_add=True)
    updated = models.DateField(auto_now=True)
    # image = models.ManyToManyField('FileHandling.Image', related_name='ProjectImage')
    image = VersatileImageField(
        'Image',
        upload_to='images/',
        ppoi_field='image_ppoi'
    )
    image_ppoi = PPOIField()

    class Meta:
        ordering = ['-created']

    def __str__(self):
        return self.name


class HeaderImage(models.Model):
    name = models.CharField(max_length=255, unique=True)
    description = models.TextField()
    created = models.DateField(auto_now_add=True)
    updated = models.DateField(auto_now=True)
    # image = models.ForeignKey('FileHandling.Image', on_delete=PROTECT)
    image = VersatileImageField(
        'Image',
        upload_to='images/HeaderImages',
        ppoi_field='image_ppoi'
    )
    image_ppoi = PPOIField()

    class Meta:
        ordering = ['-created']

    def __str__(self):
        return self.name

class MiscImage(models.Model):
    name = models.CharField(max_length=255, unique=True)
    description = models.TextField()
    created = models.DateField(auto_now_add=True)
    updated = models.DateField(auto_now=True)
    image = VersatileImageField(
        'Image',
        upload_to='images/MiscImages',
        ppoi_field='image_ppoi'
    )
    image_ppoi = PPOIField()

    class Meta:
        ordering = ['-created']

    def __str__(self):
        return self.name

class FileUpload(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    created = models.DateField(auto_now_add=True)
    updated = models.DateField(auto_now=True)
    fileupload = models.FileField()

    def __str__(self):
        return self.name

class ResumeImage(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    created = models.DateField(auto_now_add=True)
    updated = models.DateField(auto_now=True)
    link = models.URLField(max_length=255)
    image = VersatileImageField(
        'Image',
        upload_to='images/ResumeImages',
        ppoi_field='image_ppoi'
    )
    image_ppoi = PPOIField()

    def __str__(self):
        return self.name