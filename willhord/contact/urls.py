from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static

from .views import ContactFormViewSet

# contactFormRouter = DefaultRouter()
# contactFormRouter.register(r'Contact', ContactFormViewSet, basename='Contact')

urlpatterns = [
    # url(r'^',include(contactFormRouter.urls))
    url(r'^',ContactFormViewSet.as_view())
]