from django.urls import path, include
from .views import RegisterAPIView, LoginAPIView, UserAPIView
from knox import views as knox_views

urlpatterns = [
    path('api/bacm/auth', include('knox.urls')),
    path('api/bacm/auth/register/', RegisterAPIView.as_view()),
    path('api/bacm/auth/login/', LoginAPIView.as_view()),
    path('api/bacm/auth/user/', UserAPIView.as_view()),
    path('api/bacm/auth/logout/',
         knox_views.LogoutView.as_view(), name="knox_logout"),
]
