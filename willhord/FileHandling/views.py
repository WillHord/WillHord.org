from .serializers import ProjectImageSerializer, HeaderImageSerializer, MiscImageSerializer, FileUploadSerializer, ResumeImageSerializer
from .models import ProjectImage, HeaderImage, MiscImage, FileUpload, ResumeImage
from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_flex_fields.views import FlexFieldsMixin, FlexFieldsModelViewSet
from rest_flex_fields import is_expanded


class ProjectImageViewSet(FlexFieldsMixin, ReadOnlyModelViewSet):

    serializer_class = ProjectImageSerializer
    queryset = ProjectImage.objects.all()
    # permit_list_expands = ['image']
    # filterset_fields = ('category',)

    # def get_queryset(self):
    #     queryset = ProjectImage.objects.all()

    #     if is_expanded(self.request, 'image'):
    #         queryset = queryset.prefetch_related('image')

    #     # if is_expanded(self.request, 'comments'):
    #     #     queryset = queryset.prefetch_related('comments')

    #     # if is_expanded(self.request, 'sites'):
    #     #     queryset = queryset.prefetch_related('sites')

    #     # if is_expanded(self.request, 'company'):
    #     #     queryset = queryset.prefetch_related('sites__company')

    #     # if is_expanded(self.request, 'productsize'):
    #     #     queryset = queryset.prefetch_related('sites__productsize')

    #     return queryset


# class ImageViewSet(FlexFieldsModelViewSet):

#     serializer_class = ImageSerializer
#     queryset = Image.objects.all()

    # def get_queryset(self):
    #     queryset = Image.objects.filter(hidden=False).all()
    #     return {'image': queryset}

class HeaderImageViewSet(FlexFieldsMixin, ReadOnlyModelViewSet):
    serializer_class = HeaderImageSerializer
    queryset = HeaderImage.objects.all()
    lookup_field = 'name'


class MiscImageViewSet(FlexFieldsMixin, ReadOnlyModelViewSet):
    serializer_class = MiscImageSerializer
    queryset = MiscImage.objects.all()
    lookup_field = 'name'

class FileUploadViewSet(FlexFieldsMixin, ReadOnlyModelViewSet):
    serializer_class = FileUploadSerializer
    queryset = FileUpload.objects.all()

class ResumeImageViewSet(FlexFieldsMixin, ReadOnlyModelViewSet):
    serializer_class = ResumeImageSerializer
    queryset = ResumeImage.objects.all()