from django.shortcuts import render
from .serializers import ContactFormSerializer
from .models import ContactForm
from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework.views import APIView
from rest_flex_fields.views import FlexFieldsMixin, FlexFieldsModelViewSet
from rest_flex_fields import is_expanded
from rest_framework import mixins, viewsets

from django.core.mail import send_mail
from rest_framework.response import Response
from rest_framework import status

from willhord.settings import EMAIL_HOST_USER



# Create your views here.

class ContactFormViewSet(APIView):
    def post(self,request):
        serializer = ContactFormSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            name = serializer.validated_data.get('name')
            email = serializer.validated_data.get('email')
            message = serializer.validated_data.get('message')
            send_mail(
                'Sent email from {}'.format(name),
                'Name: {}\nEmail: {}\nMessage: {}'.format(name,email,message),
                email,
                ['contactwillhord@gmail.com'],
                fail_silently=False
            )
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)