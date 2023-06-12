from django.db import models

STATUS = [{0: "unsolved", 1: "solved"}]


class ContactModel(models.Model):
    name = models.CharField(max_length=100, unique=True)
    email = models.EmailField(max_length=255)
    subject = models.CharField(max_length=255, blank=False)
    queryContent = models.TextField()
    contactStatus = models.IntegerField(STATUS, default=0)

    def __str__(self):
        return f"{self.subject} {self.contactStatus}"
