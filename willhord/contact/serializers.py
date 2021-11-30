from .models import ContactForm
from rest_flex_fields import FlexFieldsModelSerializer
from rest_framework import serializers

from django.core.mail import send_mail
from rest_framework.response import Response
from rest_framework import status

from willhord.settings import EMAIL_HOST_USER

class ContactFormSerializer(serializers.ModelSerializer):
    # name = serializers.CharField()
    # email = serializers.EmailField()
    # message = serializers.CharField()
    class Meta:
        model = ContactForm
        fields = ['name','email','message']

    # def create(self, validate_data):
    #     instance = super(ContactFormSerializer, self).create(validate_data)
    #     send_mail(
    #         'Email From: ' + str(ContactFormSerializer.name),
    #         (ContactFormSerializer.name, ContactFormSerializer.email ,ContactFormSerializer.message),
    #         EMAIL_HOST_USER,
    #         ['contactwillhord@gmail.com'],
    #         fail_silently=False,
    #     )
    #     return instance