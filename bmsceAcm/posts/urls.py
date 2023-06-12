from rest_framework import routers
from .api import BlogViewSet, CategoriesViewSet

router = routers.DefaultRouter()
router.register('api/blogs', BlogViewSet, 'blogs')
router.register('api/categories', CategoriesViewSet, 'categories')

urlpatterns = router.urls
