from django.conf.urls import url, include
from .views import ProjectImageViewSet, HeaderImageViewSet, MiscImageViewSet, FileUploadViewSet, ResumeImageViewSet
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register(r'ProjectImage', ProjectImageViewSet, basename='Project')

headerImageRouter = DefaultRouter()
headerImageRouter.register(r'HeaderImage', HeaderImageViewSet, basename='HeaderImage')

MiscImageRouter = DefaultRouter()
MiscImageRouter.register(r'MiscImages', MiscImageViewSet, basename='MiscImage')

FileUploadRouter = DefaultRouter()
FileUploadRouter.register(r'FileUpload', FileUploadViewSet, basename='FileUpload')

ResumeImageRouter = DefaultRouter()
ResumeImageRouter.register(r'ResumeImage', ResumeImageViewSet, basename='ResumeImage')

urlpatterns =[
    url(r'^',include(router.urls)),
    url(r'^',include(headerImageRouter.urls)),
    url(r'^',include(MiscImageRouter.urls)),
    url(r'^',include(FileUploadRouter.urls)),
    url(r'^',include(ResumeImageRouter.urls)),
]

