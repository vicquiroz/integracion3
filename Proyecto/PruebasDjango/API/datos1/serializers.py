from rest_framework import serializers
from datos1.models import datos1

#Serializador datos1
class datos1Serializador(serializers.ModelSerializer):
    class Meta:
        model=datos1
        fields='__all__'
