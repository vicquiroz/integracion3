from django.db import models

# Create your models here.
class datos1(models.Model):
    nombre=models.CharField(max_length=300)
    datoT=models.TextField(blank=True)
    fecha_creacion=models.DateTimeField(auto_now_add=True)