from django.shortcuts import render

# from rest_framework import viewsets
# from rest_framework.decorators import api_view
from rest_framework import mixins, viewsets
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404
from rest_framework import status



from .models import Device, Lights
from .serializers import DeviceSerializer, LightSerializer

import asyncio
from .lightscript import lightcontrols

import os
import subprocess


smartlights = lightcontrols()

# Create your views here.
# @api_view(['GET','POST','PUT'])

class DeviceView(mixins.ListModelMixin,
                 mixins.RetrieveModelMixin,
                 mixins.UpdateModelMixin,
                 mixins.CreateModelMixin,
                 mixins.DestroyModelMixin,
                 viewsets.GenericViewSet):
    queryset = Device.objects.all().order_by('name')
    serializer_class = DeviceSerializer
    lookup_field = 'name'
    
    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)
    
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class LightList(APIView):
    def get(self, request, format=None):
        snippets = Lights.objects.all()
        serializer = LightSerializer(snippets, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = LightSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class LightDetail(APIView):
    def get_object(self, queryset=None):
        try:
            # return Lights.objects.get(pk=pk)
            name = self.kwargs.get('name')
            obj = Lights.objects.get(name=name)
            return obj
        except Lights.DoesNotExist:
            raise Http404

    def get(self, request, format=None, *args, **kwargs):
        snippet = self.get_object()
        serializer = LightSerializer(snippet)
        return Response(serializer.data)

    def put(self, request, format=None, *args, **kwargs):
        snippet = self.get_object()
        serializer = LightSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            smartlights.switchlights(request.data['state'])
            # os.system('python3 /var/www/willhord/test/testproject/lightControl.py ' + str(request.data['state']))
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, format=None, *args, **kwargs):
        snippet = self.get_object()
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)






# class LightsView(mixins.ListModelMixin,
#                  mixins.RetrieveModelMixin,
#                  mixins.UpdateModelMixin,
#                  mixins.CreateModelMixin,
#                  mixins.DestroyModelMixin,
#                  viewsets.GenericViewSet):
#     queryset = Lights.objects.all().order_by('name')
#     serializer_class = LightSerializer
#     lookup_field = 'name'
    
#     def get(self, request, *args, **kwargs):
#         return self.retrieve(request, *args, **kwargs)

#     def put(self, request, *args, **kwargs):

#         # os.system('python test.py '+ str(args))
#         # os.system('python3 /var/www/willhord/test/testproject/test.py')
#         # subprocess.call(['python3', 'test.py'])
#         # print("here")
        
#         asyncio.run(lightsOn())
        
#         return self.update(request, *args, **kwargs)

#     def post(self, request, *args, **kwargs):
#         return self.create(request, *args, **kwargs)

#     def delete(self, request, *args, **kwargs):
#         return self.destroy(request, *args, **kwargs)

