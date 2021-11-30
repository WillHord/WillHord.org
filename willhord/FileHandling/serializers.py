from .models import ProjectImage, HeaderImage, MiscImage, FileUpload, ResumeImage
from versatileimagefield.serializers import VersatileImageFieldSerializer
from rest_flex_fields import FlexFieldsModelSerializer


# class ImageSerializer(FlexFieldsModelSerializer):
#     image = VersatileImageFieldSerializer(
#         sizes=[
#             ('full_size', 'url'),
#             # ('thumbnail', 'thumbnail__100x100'),
#         ]
#     )

#     class Meta:
#         model = Image
#         fields = ['pk', 'name', 'image']

class ProjectImageSerializer(FlexFieldsModelSerializer):
    image = VersatileImageFieldSerializer(sizes=[('full_size','url')])
    class Meta:
        model = ProjectImage
        # image = ImageSerializer()
        fields = ['pk', 'name', 'content', 'created', 'updated','image']
        # expandable_fields = {
        #     # 'category': ('reviews.CategorySerializer', {'many': True}),
        #     # 'sites': ('reviews.ProductSiteSerializer', {'many': True}),
        #     # 'comments': ('reviews.CommentSerializer', {'many': True}),
        #     # 'image': ('FileHandling.ImageSerializer', {'many': True}),
        # }

class HeaderImageSerializer(FlexFieldsModelSerializer):
    image = VersatileImageFieldSerializer(sizes=[('full_size','url')])

    class Meta:
        model = HeaderImage
        fields = ['pk','name','image']

class MiscImageSerializer(FlexFieldsModelSerializer):
    image = VersatileImageFieldSerializer(sizes=[('full_size','url')])

    class Meta:
        model = MiscImage
        fields = ['name','description','image']

class FileUploadSerializer(FlexFieldsModelSerializer):
    class Meta:
        model = FileUpload
        fields = ['pk','name','description','fileupload']

class ResumeImageSerializer(FlexFieldsModelSerializer):
    image = VersatileImageFieldSerializer(sizes=[('full_size','url')])
    class Meta:
        model = ResumeImage
        fields = ['pk','name','description','link','image']