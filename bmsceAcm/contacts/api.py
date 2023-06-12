from .models import ContactModel
from rest_framework import viewsets, permissions
from .serializers import ContactSerializer


class ContactViewSet(viewsets.ModelViewSet):
    queryset = ContactModel.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ContactSerializer
