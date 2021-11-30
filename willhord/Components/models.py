from django.db import models

from FileHandling.models import ProjectImage, ResumeImage, FileUpload

# Create your models here.

class LanguageItem(models.Model):
    name = models.CharField(max_length=255)
    experience = models.IntegerField(blank=True, null=True)
    priority = models.IntegerField(default=0)

    class Meta:
        ordering = ['-experience', '-priority']

    def __str__(self):
        return self.name

class LargeProjectBox(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    created = models.DateField(auto_now_add=True)
    updated = models.DateField(auto_now=True)
    languages = models.ManyToManyField('Components.LanguageItem', related_name='LargeProjectBox')
    img = models.ForeignKey('FileHandling.ProjectImage', on_delete=models.PROTECT)
    link = models.URLField(max_length=255)

    def __str__(self):
        return self.name

class TerminalText(models.Model):
    index = models.IntegerField(unique=True)
    description = models.CharField(max_length=255)
    created = models.DateField(auto_now_add=True)
    updated = models.DateField(auto_now=True)
    shouldDelete = models.BooleanField(default=False)
    newLine = models.BooleanField(default=True)

    class Meta:
        ordering = ['index']

    def __str__(self):
        return str(self.index)


class SmallProjectBox(models.Model):
    name = models.CharField(max_length=255)
    index = models.IntegerField(unique=True)
    description = models.TextField()
    created = models.DateField(auto_now_add=True)
    updated = models.DateField(auto_now=True)
    link = models.URLField(max_length=255)
    displayed = models.BooleanField(default=True)

    class Meta:
        ordering = ['index']

    def __str__(self):
        return self.name

class AboutPageContent(models.Model):
    name = models.CharField(max_length=255)
    index = models.IntegerField(unique=True)
    description = models.TextField()
    created = models.DateField(auto_now_add=True)
    updated = models.DateField(auto_now=True)

    class Meta:
        ordering = ['index']

    def __str__(self):
        return self.name


class WorkExperience(models.Model):
    index = models.IntegerField(unique=True)
    title = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    dates = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ForeignKey('FileHandling.ResumeImage', on_delete=models.PROTECT)
    optionalFile = models.ForeignKey('FileHandling.FileUpload', on_delete=models.PROTECT, blank=True, null=True)
    fileText = models.CharField(max_length=255, blank=True, null=True)

    created = models.DateField(auto_now_add=True)
    updated = models.DateField(auto_now=True)

    class Meta:
        ordering = ['index']


    def __str__(self):
        return self.title

class relevantclass(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Education(models.Model):
    index = models.IntegerField(unique=True)
    school = models.CharField(max_length=255)
    degree = models.CharField(max_length=255)
    dates = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    # coursework = models.JSONField()
    coursework = models.ManyToManyField('Components.relevantclass', related_name='Education', blank=True)
    image = models.ForeignKey('FileHandling.ResumeImage', on_delete=models.PROTECT)

    created = models.DateField(auto_now_add=True)
    updated = models.DateField(auto_now=True)

    class Meta:
        ordering = ['index']

    def __str__(self):
        return self.school
    
class Experience(models.Model):
    name = models.CharField(max_length=255)
    created = models.DateField(auto_now_add=True)
    updated = models.DateField(auto_now=True)
    # displayed = models.BooleanField(default=False)
    skills = models.ManyToManyField('Components.LanguageItem',related_name="Skills")

    def __str__(self):
        return self.name