#!/usr/bin/env python
# -- coding: utf-8 --
import json
from datetime import datetime
from dateutil.relativedelta import relativedelta
import statistics as stats
import math
import bisect

def Edad(dato): #Funcion para calcular la edad
    fecha = dato.split("-") #En fecha almacena el dato separado por un guion
    fechaStr = fecha[2]+"-"+fecha[1]+"-"+fecha[0] #En fechaStr ordena los datos y los deja como una fecha 
    fecha_nacimiento = datetime.strptime(fechaStr, "%d-%m-%Y") #En fecha_nacimiento se almacena la fecha de nacimiento convertido a fecha gracias a strptime
    edad = relativedelta(datetime.now(), fecha_nacimiento)#Calcula la edad con la fecha actual y la fecha de naciemiento
    return edad.years #Retorna la edad en años


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

def TablaFrecuencia(d): #Funcion que generara la tabla de frecuencia
    try: #Intenta realizar lo siguiente
        cortes = [] #Se crea arreglo para almacenar los cortes
        aux = [] #Se crea arreglo para almacenar datos cuando se necesite 
        inter = [] #Se crea arreglo para almacenar intervalos
        marca = [] #Se crea arreglo para almacenar la marca de clase
        f = [] #Se crea arreglo para almacenar la frecuencia
        fr = [] #Se crea arreglo para almacenar la frecuencia relativa
        F = [] #Se crea arreglo para almacenar la frecuencia absoluta
        Fr = [] #Se crea arreglo para almacenar frecuencia relativa acumulada
        valores = [] #Se crea arreglo para almacenar valores
        n=len(d) #n sera igual al largo de los datos almacenados en d
        m=1+math.ceil(3.322*math.log10(n)) #Se calcula los cortes utilizando la regla de Struges
        I=max(d)-min(d) #En I se almacena el rango, restando el dato maximo menos el minimo
        C = I/m #En C se almacena el rango dividido el numero obtenido de la regla de Struges
        cortes.append(min(d)) #Se almacena dentro de cortes el menor dato de d
        while(max(cortes)<max(d)): #Mientras el valor maximo de cortes sea menor al maximo dentro de d
            cortes.append(max(cortes)+C) #dentro de cortes se almacena el valor maximo dentro de cortes mas el valor en C
        for i in range(len(cortes)-1): #Para todos los valores en el rango de cortes -1
            if(i==len(cortes)-2): #Si i es igual al largo de cortes -2
                inter.append("[" + str(round(cortes[i],2)) + ";" + str(round(cortes[i+1],2)) + "]") #Se inserta dentro de inter el intervalo generado
            else:
                inter.append("[" + str(round(cortes[i],2)) + ";" + str(round(cortes[i+1],2)) + ")") #Se inserta dentro de inter el intervalo generado
            marca.append(round(((cortes[i]+cortes[i+1])/2),2)) #Se realiza el calculo de la marca de clase
        aux = cortes.copy() #Se realiza una copia en aux de cortes
        aux[len(aux)-1] = cortes[len(cortes)-1]+1 #Para el valo almacenado en aux -1 se almacena el valor almacenado en cortes-1 +1
        for i in range(len(d)): #Para todos los valores dentro de d
            valores.append(bisect.bisect_right(aux,d[i])-1)#Se inserta dentro de valores, en el lugar a la derecha de la lista ordenada el valor de aux,d -1 
        for i in range(len(inter)): #Para todos los datos dentro de inter
            f.append(0) #Dentro de f inserta un 0
            F.append(0) #Dentro de F inserta un 0
            Fr.append(0) #Dentro de Fr inserta un 0
        for i in range(len(inter)): #Para todos los valores dentro de inter
            for j in range(len(valores)): #Para todos los datos dentro de valores
                if valores[j]==i: #Si valores es igual al indice
                    f[i] = f[i]+1 #Dentro del dato de f se almacenan las frecuencias
        fr = f.copy() # dentro de fr se copia f
        fr = list(map(lambda x: round(x / n,5), fr)) #Dentro de fr se crea una lista con las frecuencias relativas
        for i in range(len(f)): #Para todos los valores dentro de f
            if i == 0: #Si el indice es 0
                Fr[i] = Fr[i]+fr[i] #Calcula la frecuencia relativa acumulada
                F[i] = F[i]+f[i]  #Avanza dentro de las frecuencias
            else: # Si el indice no es 0
                Fr[i] = round(Fr[i-1]+fr[i],5) #Calcula la frecuencia relativa acumulada
                F[i] = F[i-1]+f[i]  #Avanza dentro de las frecuencias
        return [["valor",inter],["MC",marca],["f",f],["fr",fr],["F",F],["Fr",Fr]]
    except: #De lo contrario retorna error
        return ("ERROR - No se pueden ejecutar la funcion con los datos")

def CalcularMedia(datos): #Funcion para calcular la media mediante la libreria statics
    return [["Media",stats.mean(datos)]] #Se utiliza la funcion stats.mean y se pasan los datos

def CalcularModa(datos): #Funcion para calcular la moda mediante la libreria statics
    try: #Intenta
        MM=stats.multimode(datos) #Dentro de MM se guarda la multimoda calculada con stats.multimode pasandole los datos
        M=stats.mode(datos) #Dentro de M se guarda la moda calculada con stats.mode pasandole los datos
        return [["Multimoda",MM],["Moda",M]]
    except: #De lo contrario arroja error
        print("ERROR - No se pueden ejecutar la funcion con los datos")

def CalcularMediana(datos): #Funcion para calcular la mediana mediante la libreria statics
    try: #Intenta
        M=stats.median(datos) #Calcula la mediana con la funcion stats.median pasandole los datos y los almacena dentro de M
        MG=stats.median_grouped(datos) #Dentro de MG se almacena la mediana agrupada mediante la funcion stats.median_grouped pasandole los datos
        MA=stats.median_high(datos) #Dentro de MA se almacena la mediana alta mediante la funcion stats.median_high pasandole los datos
        ML=stats.median_low(datos) #Dentro de ML se almacena la mediana baja mediante la funcion stats.median_log pasandole los datos
        return [["Mediana",M],["Mediana Agrupada",MG],["Mediana Alta",MA],["Mediana Baja",ML]]
    except: #De lo contrario arroja error
        print("ERROR - No se pueden ejecutar la funcion con los datos")

def CalcularDesviacionE(datos): #Funcion para calcular la desviacion estandar mediante la libreria statics
    try: #Intenta
        DVP=stats.pstdev(datos) #Dentro de DVP se almacena la desviacion estandar de poblacion mediante la funcion stats.pstdev pasandole los datos
        DVM=stats.stdev(datos) #Dentro de DVM se almacena la desviacion estandar de muestra mediante la funcion stats.stdev pasandole los datos
        return [["Desviación Estándar Poblacion",DVP],["Desviación Estándar Muestra",DVM]]
    except: #De lo contrario arroja error
        print("ERROR - No se pueden ejecutar la funcion con los datos")

def Comparador(res,Funcion,parametro1,parametro2): #Funcion para comparar datos
    estadigrafos=None
    if(type(res[0])==str): #Si el tipo de datos almacenado en la posicion 0 de res es string
        if(parametro1=="fecha_nacimiento" or parametro2=="fecha_nacimiento"): #Si el parametro 1 es la fecha de nacimiento o el parametro 2 es fecha de nacimiento
            edades=[] #Crea un arreglo para las edades
            for fecha in res: #Para cada fecha en res
                edades.append(Edad(fecha)) #Inserta dentro de edades la edad y la fecha
            estadigrafos=Funcion(edades) #Almacena dentro de estadigrafos la Funcion pasandole las edades
        else: #De lo contrario
            nom,val = Suma(res) #Inserta dentro de nom y val la suma de los valores de res
            estadigrafos=Funcion(val) #Almacena dentro de estadigrafos la Funcion pasandole val
    if(type(res[0])==int or type(res[0])==float): #Si el tipo de dato de res es int o es float
        estadigrafos=Funcion(res) #Almacenta dentro de estadigrafos Funcion pasandole res
    return estadigrafos #Retorna estadigrafos


    
