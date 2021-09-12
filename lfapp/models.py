from django.core.files import storage
from django.db import models
from django.db.models.fields import URLField
from lfapp.storage import PublicStorage

# Create your models here.
class Services(models.Model):
    title = models.CharField(max_length=15)
    description = models.CharField(max_length=450)
    icon = models.ImageField(blank=True, storage=PublicStorage())
    photo = models.ImageField(blank=True, storage=PublicStorage())

    def __str__(self):
        return self.title

class Reseaux(models.Model):
    insta = models.CharField(max_length=20)
    youtube = models.CharField(max_length=20)
    CompteInsta = models.URLField(max_length=200)
    CompteYoutube = models.URLField(max_length=200)

    def __str__(self):
        return 'Contacts'

class Carousel(models.Model):
    titre = models.CharField(max_length=15,default='par défaut')
    texte = models.CharField(max_length=100)
    prix = models.IntegerField(default=0)
    image = models.ImageField(storage=PublicStorage())

    def __str__(self):
        return self.titre