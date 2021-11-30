# from django.contrib.auth.models import User, Group
from rest_framework import serializers

from .models import Device, Lights

class DeviceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Device
        fields = ('name','state')
        
class LightSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lights
        fields = ('name','state')