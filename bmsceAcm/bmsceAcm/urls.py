from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls import include
from django.urls import re_path as url
from django.conf.urls.static import static
from .views import ShowProfile

urlpatterns = [
    # Backend URLs
    path("admin/", admin.site.urls),
    path('', include('events.urls')),
    path('', include('posts.urls')),
    path('', include('contacts.urls')),
    path('', include('accounts.urls')),
    path('summernote/', include('django_summernote.urls')),
]

# urlpatterns += [re_path(r'^.*',
#                         TemplateView.as_view(template_name='index.html'))]
# url(r'^profile/$', ShowProfile.as_view())
#  + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
