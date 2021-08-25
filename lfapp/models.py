from django.db import models
from django.db.models.fields import URLField

# Create your models here.
class Services(models.Model):
    title = models.CharField(max_length=15)
    description = models.CharField(max_length=450)
    photo = models.ImageField(upload_to= 'img/', blank=True)

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
    image = models.ImageField(upload_to='img/')

    def __str__(self):
        return self.titre