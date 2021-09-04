from django.shortcuts import render
from .models import Services
from .models import Reseaux
from .models import Carousel

# Create your views here.
def index(request):
    services = Services.objects.all()
    reseaux = Reseaux.objects.first()
    carousels = Carousel.objects.all()
    context = {
        'services': services,
        'reseaux': reseaux,
        'carousel': carousels
    }
    return render(request, 'index.html', context)