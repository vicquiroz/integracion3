#!/usr/bin/env python
# -- coding: utf-8 --
import json
from matplotlib import pyplot as plt
import pandas as pd
from datetime import datetime
from dateutil.relativedelta import relativedelta
import statistics as stats
import math
import bisect

def Edad(dato):
    fecha = dato.split("-")
    fechaStr = fecha[2]+"-"+fecha[1]+"-"+fecha[0]
    fecha_nacimiento = datetime.strptime(fechaStr, "%d-%m-%Y")
    edad = relativedelta(datetime.now(), fecha_nacimiento)
    return edad.years


def Mostrar(dato,petUno,petDos):
    guar = [] #arreglo que contendra los datos pedidos
    for i in range(len(dato)):
        if (isinstance(dato[i][petUno], list)): #si la primera peticion es un arreglo
            for j in range(len(dato[i][petUno])): 
                guar.append(dato[i][petUno][j][petDos]) #guarda los datos de la segunda peticion 
        else: #sí el anterior no es un arreglo 
            guar.append(dato[i][petUno]) #se almacenan los datos 
    return(guar)        

def Suma(val):
    nombres = [] #arreglo que contiene los nombres
    cont = [] #arreglo que contiene la cantidas de veces repetido el nombre
    nombres.append(val[0])#se necesita que se inicie con un valor
    cont.append(0)#se necesita que se inicie con un valor
    for i in range(len(val)):
        resNom = nombres #comparador de nombres
        resCont = cont #comparador de cantidad
        for j in range(len(nombres)):
            if nombres[j] == val[i]: #si detecta que almacenado en nombre existe una variable igual a la de los datos
                cont[j] = cont[j]+1 #le suma 1 a su contador correspondiente
                resCont = None #se reinicia el comparador
                resNom = None #se reinicia el comparador
        if resNom == nombres and resCont == cont: #si las variables y sus comparadores coinciden
            nombres.append(val[i]) #se agrega el nombre
            cont.append(1) #se agrega un 1 al contador 
    return nombres, cont

def TablaFrecuencia(d):
    try:
        cortes = []
        aux = []
        inter = []
        marca = []
        f = []
        fr = []
        F = []
        Fr = []
        valores = []
        n=len(d)
        m=1+math.ceil(3.322*math.log10(n))
        I=max(d)-min(d)
        C = I/m
        cortes.append(min(d))
        while(max(cortes)<max(d)):
            cortes.append(max(cortes)+C)
        for i in range(len(cortes)-1): 
            if(i==len(cortes)-2):
                inter.append("[" + str(round(cortes[i],2)) + ";" + str(round(cortes[i+1],2)) + "]")
            else:
                inter.append("[" + str(round(cortes[i],2)) + ";" + str(round(cortes[i+1],2)) + ")")
            marca.append(round(((cortes[i]+cortes[i+1])/2),2))
        aux = cortes.copy()
        aux[len(aux)-1] = cortes[len(cortes)-1]+1
        for i in range(len(d)):
            valores.append(bisect.bisect_right(aux,d[i])-1)
        for i in range(len(inter)):
            f.append(0)
            F.append(0)
            Fr.append(0)
        for i in range(len(inter)):
            for j in range(len(valores)):
                if valores[j]==i:
                    f[i] = f[i]+1
        fr = f.copy()
        fr = list(map(lambda x: round(x / n, 2), fr))
        for i in range(len(f)):
            if i == 0:
                Fr[i] = Fr[i]+fr[i]
                F[i] = F[i]+f[i]
            else:
                Fr[i] = round(Fr[i-1]+fr[i],2)
                F[i] = F[i-1]+f[i]
        return [["valor",inter],["MC",marca],["f",f],["fr",fr],["F",F],["Fr",Fr]]
    except:
        return ("ERROR - No se pueden ejecutar la funcion con los datos")

def CalcularMedia(datos):
    return [["Media",stats.mean(datos)]]

def CalcularModa(datos):
    try:
        MM=stats.multimode(datos)
        M=stats.mode(datos)
        return [["Multimoda",MM],["Moda",M]]
    except:
        print("ERROR - No se pueden ejecutar la funcion con los datos")

def CalcularMediana(datos):
    try:
        M=stats.median(datos)
        MG=stats.median_grouped(datos)
        MA=stats.median_high(datos)
        ML=stats.median_low(datos)
        return [["Mediana",M],["Mediana Agrupada",MG],["Mediana Alta",MA],["Mediana Baja",ML]]
    except:
        print("ERROR - No se pueden ejecutar la funcion con los datos")

def CalcularDesviacionE(datos):
    try:
        DVP=stats.pstdev(datos)
        DVM=stats.stdev(datos)
        return [["Desviación Estándar Poblacion",DVP],["Desviación Estándar Muestra",DVM]]
    except:
        print("ERROR - No se pueden ejecutar la funcion con los datos")

def Comparador(res,Funcion,parametro1,parametro2):
    estadigrafos=None
    if(type(res[0])==str):
        if(parametro1=="fecha_nacimiento" or parametro2=="fecha_nacimiento"):
            edades=[]
            for fecha in res:
                edades.append(Edad(fecha))
            estadigrafos=Funcion(edades)
        else:
            nom,val = Suma(res)
            estadigrafos=Funcion(val)
        if(type(res[0])==int):
            estadigrafos=Funcion(res)
    return estadigrafos


    
