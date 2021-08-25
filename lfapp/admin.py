from lfapp.models import Services
from django.contrib import admin
from lfapp.models import Services
from .models import Reseaux
from .models import Carousel


# Register your models here.
class ServicesAdmin(admin.ModelAdmin):
    def has_add_permission(self, request):
        return  Services.objects.count() < 4

class ReseauxAdmin(admin.ModelAdmin):
    def has_add_permission(self, request) -> bool:
        return Reseaux.objects.count()==0

class CarouselAdmin(admin.ModelAdmin):
    def has_add_permission(self, request) -> bool:
        return Carousel.objects.count() < 3

admin.site.register(Carousel, CarouselAdmin)
admin.site.register(Services, ServicesAdmin)
admin.site.register(Reseaux, ReseauxAdmin)