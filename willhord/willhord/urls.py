"""willhord URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf.urls import url

from django.conf import settings
from django.conf.urls.static import static


from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('', TemplateView.as_view(template_name='index.html')),
    path('Contact/', TemplateView.as_view(template_name='index.html')),
    path('About/', TemplateView.as_view(template_name='index.html')),
    path('Login/', TemplateView.as_view(template_name='index.html')),
    path('login/', TemplateView.as_view(template_name='index.html')),
    path('Projects/', TemplateView.as_view(template_name='index.html')),
    path('Resume/', TemplateView.as_view(template_name='index.html')),
    path('test/', TemplateView.as_view(template_name='index.html')),
    path('UnderConstruction/', TemplateView.as_view(template_name='index.html')),
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


# REST API
urlpatterns += [
    path('api/', include('api.urls'))
]

# Authentication
urlpatterns += [
    path('auth/', include('authentication.urls'))
]

# FileHandling
urlpatterns += [
    path('api/Files/', include('FileHandling.urls'))
]

# Components
urlpatterns += [
    path('api/Components/', include('Components.urls'))
]

# Contact
urlpatterns += [
    path('api/Contact/', include('contact.urls'))
]

# urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)