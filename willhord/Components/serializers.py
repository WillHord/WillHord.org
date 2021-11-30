from .models import LargeProjectBox, LanguageItem, TerminalText, SmallProjectBox, AboutPageContent, WorkExperience, Education, relevantclass, Experience
from rest_flex_fields import FlexFieldsModelSerializer
from rest_framework import serializers

class LanguageSerializer(FlexFieldsModelSerializer):
    class Meta:
        model = LanguageItem
        fields = ['pk','name','experience','priority']

class LargeProjectBoxSerializer(FlexFieldsModelSerializer):
    class Meta:
        model = LargeProjectBox
        # languages = LanguageSerializer()
        fields = ['pk','name','description','created','updated','link']
        expandable_fields = {
            'img' : ('FileHandling.ProjectImageSerializer'),
            'languages' : ("Components.LanguageSerializer",{'many':True}),
        }

class TerminalTextSerializer(FlexFieldsModelSerializer):
    class Meta:
        model = TerminalText
        fields = ['pk','index','description','created','updated','shouldDelete','newLine']


class SmallProjectBoxSerializer(serializers.ModelSerializer):
    class Meta:
        model = SmallProjectBox
        fields = ['pk','index','name','description','created','updated','link','displayed']

class AboutPageContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutPageContent
        fields = ['index','name','description']

class WorkExperienceSerializer(FlexFieldsModelSerializer):
    class Meta:
        model = WorkExperience
        fields = ['index','title','position','location','dates','description','fileText']
        expandable_fields = {
            'image': ('FileHandling.ResumeImageSerializer'),
            'optionalFile': ('FileHandling.FileUploadSerializer'),
        }

class relevantclassSerializer(FlexFieldsModelSerializer):
    class Meta:
        model = relevantclass
        fields = ['name']

class EducationSerializer(FlexFieldsModelSerializer):
    class Meta:
        model = Education
        fields = ['index','school','degree','dates','location']
        expandable_fields = {
            'coursework': ('Components.relevantclassSerializer',{'many':True}),
            'image': ('FileHandling.ResumeImageSerializer')
        }

class ExperienceSerializer(FlexFieldsModelSerializer):
    class Meta:
        model = Experience
        fields = ['name','created','updated']
        expandable_fields = {
            'skills':('Components.LanguageSerializer',{'many':True}),
        }