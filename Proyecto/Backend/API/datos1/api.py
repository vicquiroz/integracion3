from datos1.models import datos1
from rest_framework import viewsets, permissions
from .serializers import datos1Serializador

#Visualizador datos1
class Visualizadordatos1(viewsets.ModelViewSet):
    queryset=datos1.objects.all()
    permission_classes=[
        permissions.AllowAny
    ]
    serializer_class=datos1Serializador