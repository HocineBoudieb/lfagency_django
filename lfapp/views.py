from django.shortcuts import render
from .models import Services
from .models import Reseaux

# Create your views here.
def index(request):
    services = Services.objects.all()
    reseaux = Reseaux.objects.first()
    context = {
        'services': services,
        'reseaux': reseaux
    }
    return render(request, 'index.html', context)