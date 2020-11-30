#!/usr/bin/env python
# -- coding: utf-8 --
import json
from matplotlib import pyplot as plt
import pandas as pd
from datetime import datetime
from dateutil.relativedelta import relativedelta

def edad(dato):
    fecha = dato.split("-")
    fechaStr = fecha[2]+"-"+fecha[1]+"-"+fecha[0]
    fecha_nacimiento = datetime.strptime(fechaStr, "%d-%m-%Y")
    edad = relativedelta(datetime.now(), fecha_nacimiento)
    return edad.years


def mostrar(dato,petUno,petDos):
    guar = [] #arreglo que contendra los datos pedidos
    for i in range(len(dato)):
        if (isinstance(dato[i][petUno], list)): #si la primera peticion es un arreglo
            for j in range(len(dato[i][petUno])): 
                guar.append(dato[i][petUno][j][petDos]) #guarda los datos de la segunda peticion 
                
        else: #sí el anterior no es un arreglo 
            guar.append(dato[i][petUno]) #se almacenan los datos 
    return(guar)        

def suma(val):
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

with open('prueba.json', encoding='utf-8') as file: #abrir imagen con utf-8 para mayor comprension
    fichas = json.load(file) #guardamos el contenido del json en data
    #print(fichas[1])


consulta = "Left eye"
ses = "sesiones_medica"
arq = "arquetipos"
cont = 0

guar = []
pos = []
for i in range(len(fichas)):
    for j in range(len(fichas[i][ses])):
        for k in range(len(fichas[i][ses][j][arq])):
            for l in range(len(fichas[i][ses][j][arq][k])):
                #print(fichas[i][ses][j][arq][k][l]["clave"])
                if consulta == fichas[i][ses][j][arq][k][l]["valor"]:
                    guar.append(str(fichas[i]["nombre"])+" "+str(fichas[i]["apellidos"]))
                    pos.append(j)
                else:
                    cont = cont+1
print(guar)
print(pos)
#print(cont)



    
    #print(data[0]['sesiones_medica'][0]['nombre_sesion'])


####llamada a los def#####
    #res = mostrar(dato,'sesiones_medica','nombre_profesional')
    #tabla(dato)
    #edad = edad(dato[0]['fecha_nacimiento'])
    #print(edad)

    #nom,val = suma(res)
    #graficar(nom, val)


    
