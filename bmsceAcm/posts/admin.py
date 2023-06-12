from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
from .models import BlogPost, Categories


class BlogPostAdmin(SummernoteModelAdmin):  # instead of ModelAdmin
    summernote_fields = ('content',)


admin.site.register(BlogPost, BlogPostAdmin)
admin.site.register(Categories)
