from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.db import models
from datos1.models import datos1
from . import estadistica
import json
import base64
# Create your views here.
@api_view(['GET','POST','DELETE'])
def GetDatos(request,parametro):
    Datos=datos1.objects.filter(id=parametro)
    if(len(Datos)>0):
        Resp=Datos[0].datoT
    else:
        Resp=None
    if request.method=='GET':
        return Response({'Query':"Searching file with ID="+parametro,"file":Resp})
@api_view(['GET','POST','DELETE'])
def Estadistica(request,parametro):
    Datos=datos1.objects.filter(id=parametro)
    if(len(Datos)>0):
        Resp=Datos[0].datoT
        dato = json.loads(Resp)
        #print(dato)
        res = estadistica.mostrar(dato,'sesiones_medica','nombre_profesional')
        nom,val = estadistica.suma(res)
        estadistica.graficar(nom, val)
        image_data=None
        with open("grafico.png", "rb") as image_file:
            image_data = base64.b64encode(image_file.read()).decode('utf-8')
    else:
        Resp=None
        image_data=None
    if request.method=='GET':
        return Response(image_data)

    
