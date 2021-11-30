from django.contrib import admin
from .models import ProjectImage, HeaderImage, MiscImage, FileUpload, ResumeImage

# Register your models here.

# admin.site.register(Image)
admin.site.register(ProjectImage)
admin.site.register(HeaderImage)
admin.site.register(MiscImage)
# admin.site.register(LargeProjectBox)

admin.site.register(FileUpload)
admin.site.register(ResumeImage)