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
def GetDatos(request,parametro): #Realiza consulta a la Base de datos
    Datos=datos1.objects.filter(id=parametro)  #Filtra los datos por parametro
    if(len(Datos)>0): #verifica el largo de "Datos"
        Resp=Datos[0].datoT # todo se va la variable "Resp"
    else:
        Resp=None
    if request.method=='GET':
        return Response({'Query':"Searching file with ID="+parametro,"file":Resp}) # Devuelve la Consulta

@api_view(['POST'])
def EstadisticaDesdeArchivo(request): #Realiza la solicitud de Estadistica desde archivo
    if request.method=='POST': # Tiene que enviarse
        parametro=request.data #Recibe la respuesta
        archivo=parametro[0] # Toma el primer dato de parametro
        parametro1=str(parametro[1][1]) # Los separa y pasa a parametro 1 y 2
        parametro2=str(parametro[1][0]) 
        if(len(archivo)>0): #Verifica el largo de "archivo"
            dato = json.loads(archivo) #Carga el archivo json
            res = estadistica.Mostrar(dato,parametro1,parametro2) #Adjunta en estadistica todos los datos de mostrar
            nom,val = estadistica.Suma(res) # Llama la funcion "Suma" creada en estadistica.py
            graf = [[nom,val]]
        return Response(graf)

@api_view(['POST'])
def ModaDesdeArchivo(request): #Realiza la solicitud de Moda desde archivo
    if request.method=='POST':# Se realiza la solicitud de envio
        parametro=request.data # Recibe la respuesta
        archivo=parametro[0]
        parametro1=str(parametro[1][1]) # Los separa y pasa a parametro 1 y 2
        parametro2=str(parametro[1][0])
        estadigrafos=None
        if(len(archivo)>0): #Verifica el largo de "archivo"
            dato = json.loads(archivo) #Carga el archivo json
            res = estadistica.Mostrar(dato,parametro1,parametro2) #Adjunta en estadistica todos los datos de mostrar
            estadigrafos=estadistica.CalcularModa(res) # Llama la funcion "CalcularModa" creada en estadistica.py
        return Response(estadigrafos)

@api_view(['POST'])
def MediaDesdeArchivo(request):#Realiza la solicitud de Media desde archivo
    if request.method=='POST':# Se realiza la solicitud de envio
        parametro=request.data# Recibe la respuesta
        archivo=parametro[0]
        parametro1=str(parametro[1][1])# Los separa y pasa a parametro 1 y 2
        parametro2=str(parametro[1][0])
        estadigrafos=None
        if(len(archivo)>0):#Verifica el largo de "archivo"
            dato = json.loads(archivo) #Carga el archivo json
            res = estadistica.Mostrar(dato,parametro1,parametro2)#Adjunta en estadistica todos los datos de mostrar
            estadigrafos=estadistica.Comparador(res,estadistica.CalcularMedia,parametro1,parametro2)# Llama la funcion "Comparador" creada en estadistica.py
        return Response(estadigrafos)

@api_view(['POST'])
def MedianaDesdeArchivo(request): #Realiza la solicitud de Mediana desde archivo
    if request.method=='POST': # Se realiza la solicitud de envio
        parametro=request.data # Recibe la respuesta
        archivo=parametro[0]
        parametro1=str(parametro[1][1]) # Los separa y pasa a parametro 1 y 2
        parametro2=str(parametro[1][0])
        estadigrafos=None # Reinicia el valor
        if(len(archivo)>0): #Verifica el largo de "archivo"
            dato = json.loads(archivo) #Carga el archivo json
            res = estadistica.Mostrar(dato,parametro1,parametro2) #Adjunta en estadistica todos los datos de "mostrar"
            estadigrafos=estadistica.Comparador(res,estadistica.CalcularMediana,parametro1,parametro2) # Llama la funcion "Comparador" creada en estadistica.py
        return Response(estadigrafos)

@api_view(['POST'])
def DesviacionEstandarDesdeArchivo(request): #Realiza la solicitud de Desviacion Estandar desde archivo
    if request.method=='POST':# Se realiza la solicitud de envio
        parametro=request.data  # Recibe la respuesta
        archivo=parametro[0]
        parametro1=str(parametro[1][1]) # Los separa y pasa a parametro 1 y 2
        parametro2=str(parametro[1][0])
        estadigrafos=None # Reinicia el valor
        if(len(archivo)>0): #Verifica el largo de "archivo"
            dato = json.loads(archivo) #Carga el archivo json
            res = estadistica.Mostrar(dato,parametro1,parametro2) #Adjunta en estadistica todos los datos de "mostrar"
            estadigrafos=estadistica.Comparador(res,estadistica.CalcularDesviacionE,parametro1,parametro2) # Llama la funcion "Comparador" creada en estadistica.py
        return Response(estadigrafos)

@api_view(['POST'])
def TablaFrecuenciaDesdeArchivo(request): #Realiza la solicitud de Tabla de Frecuencia desde archivo
    if request.method=='POST':  #Se realiza la solicitud de envio
        parametro=request.data # Recibe la respuesta
        archivo=parametro[0]
        parametro1=str(parametro[1][1]) # Los separa y pasa a parametro 1 y 2
        parametro2=str(parametro[1][0])
        estadigrafos=None  # Reinicia el valor
        if(len(archivo)>0): #Verifica el largo de "archivo"
            dato = json.loads(archivo) #Carga el archivo json
            res = estadistica.Mostrar(dato,parametro1,parametro2) #Adjunta en estadistica todos los datos de "mostrar"
            estadigrafos=estadistica.Comparador(res,estadistica.TablaFrecuencia,parametro1,parametro2) # Llama la funcion "Comparador" creada en estadistica.py
        return Response(estadigrafos)

@api_view(['GET','POST','DELETE']) 
def GetNombres(request): #Realiza la solicitud "GetNombres"
    if request.method=='GET':  # Obtiene los datos
        Datos=datos1.objects.values("id","nombre") #Los almacena en la variable datos 
        Nombres=[]  # Se crea un arreglo
        for i in range(0,len(Datos)):  # Recorre Todo "Datos"
            Nombres.append([Datos[i]["nombre"],Datos[i]["id"]]) #Añade "Nombre" e "id" 
        return Response(Nombres)

@api_view(['POST'])
def GraficaArq(request): #Realiza la solicitud de GraficaArq
    if request.method=='POST': #Se realiza la solicitud de envio
        parametro=request.data # Recibe la respuesta
        archivo=parametro[0] # Almacena un parametro en archivo
        consulta = parametro[1] # Almacena otro en consulta
        if(len(archivo)>0): #Verifica el largo de "archivo"
            dato = json.loads(archivo) #Carga el archivo json
            nom,ape,rut,pos,con,_ = arquetipos.Consigue(dato,consulta,1)#consigue todos los datos que se necesitan para graficar
            nom,val = arquetipos.Suma(nom,ape,rut,pos,con) #Adjunta en nombre y val todos los datos de "Suma"
            graf = [[nom,val]] #Los almacena en un arreglo
        return Response(graf)

@api_view(['POST']) 
def TablaFrecuenciaArq(request): #Realiza la solicitud de "TablaFrecuenciaArq"
    if request.method=='POST':  #Se realiza la solicitud de envio
        edad = [] # Arreglo para edad
        parametro=request.data  # Recibe la respuesta
        archivo=parametro[0] # Almacena un parametro en archivo
        consulta = parametro[1] # Almacena otro en consulta
        estadigrafos=None # Reinicia la variable
        if(len(archivo)>0): #Verifica el largo de "archivo"
            dato = json.loads(archivo)
            _,_,_,_,_,ed = arquetipos.Consigue(dato,consulta,2) #solo toma ed (edad) y consigue los datos
            for i in range(len(ed)): #Recorre todo el largo de ed (edad)
                edad.append(estadistica.Edad(ed[i])) # Agrega a edad todoel resultado estadistic0
            estadigrafos=estadistica.TablaFrecuencia(edad)
        return Response(estadigrafos)

@api_view(['GET'])
def ContenidosArq(request):#Realiza la solicitud "ContenidosArq"
    if request.method=='GET':# Obtiene los datos
        Datos=datos1.objects.filter(nombre="Arquetipos") # Almacena en la variable Datos solo nombre que corresponda a "Arquetipos"
        if(len(Datos)>0):  #Verifica el largo de "archivo" 
            Resp=Datos[0].datoT #Consigue las respuestas y las almacena en "Resp"
            Contenidos=arquetipos.ConseguirContenidos(Resp)
            return Response(Contenidos)  # Retorna las respuestas 
        else:
            return Response(False) # En caso de que sea falso.
            