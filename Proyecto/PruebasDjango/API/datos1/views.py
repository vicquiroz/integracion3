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

@api_view(['POST'])
def EstadisticaDesdeArchivo(request):
    if request.method=='POST':
        parametro=request.data
        archivo=parametro[0]
        parametro1=str(parametro[1][1])
        parametro2=str(parametro[1][0])
        image_data=None
        if(len(archivo)>0):
            dato = json.loads(archivo)
            res = estadistica.mostrar(dato,parametro1,parametro2)
            nom,val = estadistica.suma(res)
            estadistica.graficar(nom, val)
            with open("grafico.png", "rb") as image_file:
                image_data = base64.b64encode(image_file.read()).decode('utf-8')
        return Response(image_data)

@api_view(['POST'])
def ModaDesdeArchivo(request):
    if request.method=='POST':
        parametro=request.data
        archivo=parametro[0]
        parametro1=str(parametro[1][1])
        parametro2=str(parametro[1][0])
        estadigrafos=None
        if(len(archivo)>0):
            dato = json.loads(archivo)
            res = estadistica.mostrar(dato,parametro1,parametro2)
            estadigrafos=estadistica.CalcularModa(res)
        print(estadigrafos)
        return Response(estadigrafos)

@api_view(['POST'])
def MediaDesdeArchivo(request):
    if request.method=='POST':
        parametro=request.data
        archivo=parametro[0]
        parametro1=str(parametro[1][1])
        parametro2=str(parametro[1][0])
        estadigrafos=None
        if(len(archivo)>0):
            dato = json.loads(archivo)
            res = estadistica.mostrar(dato,parametro1,parametro2)
            if(type(res[0])==str):
                if(parametro1=="fecha_nacimiento" or parametro2=="fecha_nacimiento"):
                    edades=[]
                    for fecha in res:
                        edades.append(estadistica.edad(fecha))
                    estadigrafos=estadistica.CalcularMedia(edades)
                else:
                    nom,val = estadistica.suma(res)
                    estadigrafos=estadistica.CalcularMedia(val)
            if(type(res[0])==int):
                estadigrafos=estadistica.CalcularMedia(res)
        return Response(estadigrafos)

@api_view(['POST'])
def MedianaDesdeArchivo(request):
    if request.method=='POST':
        parametro=request.data
        archivo=parametro[0]
        parametro1=str(parametro[1][1])
        parametro2=str(parametro[1][0])
        estadigrafos=None
        if(len(archivo)>0):
            dato = json.loads(archivo)
            res = estadistica.mostrar(dato,parametro1,parametro2)
            if(type(res[0])==str):
                if(parametro1=="fecha_nacimiento" or parametro2=="fecha_nacimiento"):
                    edades=[]
                    for fecha in res:
                        edades.append(estadistica.edad(fecha))
                    estadigrafos=estadistica.CalcularMediana(edades)
                else:
                    nom,val = estadistica.suma(res)
                    estadigrafos=estadistica.CalcularMediana(val)
            if(type(res[0])==int):
                estadigrafos=estadistica.CalcularMediana(res)
        return Response(estadigrafos)

@api_view(['POST'])
def DesviacionEstandarDesdeArchivo(request):
    if request.method=='POST':
        parametro=request.data
        archivo=parametro[0]
        parametro1=str(parametro[1][1])
        parametro2=str(parametro[1][0])
        estadigrafos=None
        if(len(archivo)>0):
            dato = json.loads(archivo)
            res = estadistica.mostrar(dato,parametro1,parametro2)
            if(type(res[0])==str):
                if(parametro1=="fecha_nacimiento" or parametro2=="fecha_nacimiento"):
                    edades=[]
                    for fecha in res:
                        edades.append(estadistica.edad(fecha))
                    estadigrafos=estadistica.CalcularDesviacionE(edades)
                else:
                    nom,val = estadistica.suma(res)
                    estadigrafos=estadistica.CalcularDesviacionE(val)
            if(type(res[0])==int):
                estadigrafos=estadistica.CalcularDesviacionE(res)
        return Response(estadigrafos)