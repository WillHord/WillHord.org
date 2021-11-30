from django.urls import include, path, re_path
from rest_framework import routers
from . import views

# router = routers.DefaultRouter()
# router.register(r'devices', views.DeviceView)

# lightrouter = routers.DefaultRouter()
# lightrouter.register(r'lights', views.LightsView)

urlpatterns = [
    # path('', include(router.urls)),
    # path('',include(lightrouter.urls)),
    path('lights/', views.LightList.as_view()),
    re_path(r'^lights/(?P<name>\w+)/$', views.LightDetail.as_view()),
    # path('Lights/', views.LightsView.as_view()),
    # path('devices/', views.DeviceView.as_view()),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]