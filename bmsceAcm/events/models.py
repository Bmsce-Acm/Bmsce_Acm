from django.db import models
import datetime


class Event(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(max_length=500, blank=True)
    event_type = models.CharField(max_length=45, blank=True)
    event_date = models.DateField(default=datetime.datetime.now)
    thumbnail = models.ImageField(max_length=255, blank=True, null=True)
    exploreLink = models.URLField(blank=True)

    def __str__(self):
        return f"{self.name}"
