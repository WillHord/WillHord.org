from django.shortcuts import render
from .serializers import LargeProjectBoxSerializer, LanguageSerializer, TerminalTextSerializer, SmallProjectBoxSerializer, AboutPageContentSerializer, WorkExperienceSerializer, EducationSerializer, relevantclassSerializer, ExperienceSerializer
from .models import LanguageItem, LargeProjectBox, TerminalText, SmallProjectBox, AboutPageContent, WorkExperience, Education, relevantclass, Experience
from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_flex_fields.views import FlexFieldsMixin, FlexFieldsModelViewSet
from rest_flex_fields import is_expanded
from rest_framework import mixins, viewsets

# Create your views here.

class LargeProjectBoxViewSet(FlexFieldsMixin, ReadOnlyModelViewSet):
    serializer_class = LargeProjectBoxSerializer
    permit_list_expands = ['img','languages','img.image']
    filterset_fields = ('languages',)

    # queryset = LargeProjectBox.objects.all()
    def get_queryset(self):
        queryset = LargeProjectBox.objects.all()

        if is_expanded(self.request, 'img'):
            queryset = queryset.prefetch_related('img')

        if is_expanded(self.request, 'languages'):
            queryset = queryset.prefetch_related('languages')

        return queryset

class LanguageViewSet(FlexFieldsModelViewSet):
    serializer_class = LanguageSerializer
    queryset = LanguageItem.objects.all()

class TerminalTextViewSet(FlexFieldsMixin, ReadOnlyModelViewSet):
    serializer_class = TerminalTextSerializer
    filterset_fields = ('index')
    queryset = TerminalText.objects.all()

class SmallProjectBoxViewSet(mixins.ListModelMixin,
                            mixins.RetrieveModelMixin,
                            viewsets.GenericViewSet):
    serializer_class = SmallProjectBoxSerializer
    queryset = SmallProjectBox.objects.all()
    lookup_field = 'index'

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

class AboutPageContentViewSet(FlexFieldsMixin, ReadOnlyModelViewSet):
    serializer_class = AboutPageContentSerializer
    filterset_fields = ('index')
    queryset = AboutPageContent.objects.all()

class relevantclassViewSet(FlexFieldsModelViewSet):
    serializer_class = relevantclassSerializer
    queryset = relevantclass.objects.all()

class EducationViewSet(FlexFieldsMixin, ReadOnlyModelViewSet):
    serializer_class = EducationSerializer
    permit_list_expands = ['coursework','image']
    filterset_fields = ('index')
    def get_queryset(self):
        queryset = Education.objects.all()

        if is_expanded(self.request, 'coursework'):
            queryset = queryset.prefetch_related('coursework')

        if is_expanded(self.request, 'image'):
            queryset = queryset.prefetch_related('image')

        return queryset
    # queryset = Education.objects.all()

class WorkExperienceViewSet(FlexFieldsMixin, ReadOnlyModelViewSet):
    serializer_class = WorkExperienceSerializer
    filterset_fields = ('index')
    permit_list_expands = ['image','optionalFile']
    
    def get_queryset(self):
        queryset = WorkExperience.objects.all()

        if is_expanded(self.request, 'image'):
            queryset = queryset.prefetch_related('image')

        if is_expanded(self.request, 'optionalFile'):
            queryset = queryset.prefetch_related('optionalFile')

        return queryset


class ExperienceViewSet(FlexFieldsMixin, ReadOnlyModelViewSet):
    serializer_class = ExperienceSerializer
    permit_list_expands = ['skills']

    def get_queryset(self):
        queryset = Experience.objects.all()

        if is_expanded(self.request, 'skills'):
            queryset = queryset.prefetch_related('skills')
        
        return queryset


# class SmallProjectBoxViewSet(FlexFieldsMixin, ReadOnlyModelViewSet):
#     serializer_class = SmallProjectBoxSerializer
#     filterset_fields = ('name')
#     queryset = SmallProjectBox.objects.all()
#     lookup_field = 'index'