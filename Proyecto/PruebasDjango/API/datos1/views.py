from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.db import models
from datos1.models import datos1
from . import estadistica
from . import arquetipos
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
        if(len(archivo)>0):
            dato = json.loads(archivo)
            res = estadistica.Mostrar(dato,parametro1,parametro2)
            nom,val = estadistica.Suma(res)
            graf = [[nom,val]]
        return Response(graf)

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
            res = estadistica.Mostrar(dato,parametro1,parametro2)
            estadigrafos=estadistica.CalcularModa(res)
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
            res = estadistica.Mostrar(dato,parametro1,parametro2)
            estadigrafos=estadistica.Comparador(res,estadistica.CalcularMedia,parametro1,parametro2)
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
            res = estadistica.Mostrar(dato,parametro1,parametro2)
            estadigrafos=estadistica.Comparador(res,estadistica.CalcularMediana,parametro1,parametro2)
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
            res = estadistica.Mostrar(dato,parametro1,parametro2)
            estadigrafos=estadistica.Comparador(res,estadistica.CalcularDesviacionE,parametro1,parametro2)
        return Response(estadigrafos)

@api_view(['POST'])
def TablaFrecuenciaDesdeArchivo(request):
    if request.method=='POST':
        parametro=request.data
        archivo=parametro[0]
        parametro1=str(parametro[1][1])
        parametro2=str(parametro[1][0])
        estadigrafos=None
        if(len(archivo)>0):
            dato = json.loads(archivo)
            res = estadistica.Mostrar(dato,parametro1,parametro2)
            estadigrafos=estadistica.Comparador(res,estadistica.TablaFrecuencia,parametro1,parametro2)
        return Response(estadigrafos)

@api_view(['GET','POST','DELETE']) 
def GetNombres(request): 
    if request.method=='GET': 
        Datos=datos1.objects.values("id","nombre")
        Nombres=[] 
        for i in range(0,len(Datos)): 
            Nombres.append([Datos[i]["nombre"],Datos[i]["id"]]) 
        return Response(Nombres)

@api_view(['POST'])
def GraficaArq(request):
    if request.method=='POST':
        parametro=request.data
        archivo=parametro[0]
        consulta = parametro[1]
        if(len(archivo)>0):
            dato = json.loads(archivo)
            nom,ape,rut,pos,con,_ = arquetipos.consigue(dato,consulta,1)
            nom,val = arquetipos.suma(nom,ape,rut,pos,con)
            graf = [[nom,val]]
        return Response(graf)

@api_view(['POST'])
def TablaFrecuenciaArq(request):
    if request.method=='POST':
        edad = []
        parametro=request.data
        archivo=parametro[0]
        consulta = parametro[1]
        estadigrafos=None
        if(len(archivo)>0):
            dato = json.loads(archivo)
            _,_,_,_,_,ed = arquetipos.consigue(dato,consulta,2)
            for i in range(len(ed)):
                edad.append(estadistica.Edad(ed[i]))
            estadigrafos=estadistica.TablaFrecuencia(edad)
        return Response(estadigrafos)