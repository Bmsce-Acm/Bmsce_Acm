from .models import BlogPost, Categories
from rest_framework import viewsets, permissions
from .serializers import BlogPostSerializer, categoriesSerializer


class BlogViewSet(viewsets.ModelViewSet):
    queryset = BlogPost.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = BlogPostSerializer


class CategoriesViewSet(viewsets.ModelViewSet):
    queryset = Categories.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = categoriesSerializer
