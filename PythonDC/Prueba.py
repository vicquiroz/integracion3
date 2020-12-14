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
      

def suma(n,a,r,p,c):
    cont = [] #arreglo que contiene la cantidas de veces repetido el nombre
    rut = []
    con = []
    pos = 0
    nombresFin = [n[0]+" "+a[0]+"\n"+str(r[0])+" pos:"+str(p[0])+" consulta:"+str(c[0])]
    rut.append(r[0])
    cont.append(0)#se necesita que se inicie con un valor
    con.append(str(c[0]))
    for i in range(len(n)):
        resRut = rut #comparador de nombres
        resCont = cont #comparador de cantidad
        for j in range(len(rut)):
    
            if rut[j] == r[i]: #si detecta que almacenado en nombre existe una variable igual a la de los datos
                cont[j] = cont[j]+1 #le suma 1 a su contador correspondiente
                resCont = None #se reinicia el comparador
                resRut = None #se reinicia el comparador
                if i != 0:
                    if con[pos] != str(c[i]):
                        nombresFin[pos] = nombresFin[pos]+","+str(c[i])

        if resRut == rut and resCont == cont: #si las variables y sus comparadores coinciden
            con.append(str(c[i]))
            pos = pos + 1
            nombresFin.append(n[i]+" "+a[i]+"\n"+str(r[i])+" pos:"+str(p[i])+" consulta:"+str(c[i])) #se agrega el nombre
            rut.append(r[i])
            cont.append(1) #se agrega un 1 al contador 

    return nombresFin, cont

with open('prueba.json', encoding='utf-8') as file: #abrir imagen con utf-8 para mayor comprension
    dato = json.load(file) #guardamos el contenido del json en data
    #print(fichas[1])


consulta = "Left eye"
ses = "sesiones_medica"
arq = "arquetipos"

def consigue(fichas):
    nom = []
    ape = []
    rut = []
    pos = []
    con = []
    arque = []
    for i in range(len(fichas)):
        for j in range(len(fichas[i][ses])):
            for k in range(len(fichas[i][ses][j][arq])):
                for l in range(len(fichas[i][ses][j][arq][k])):
                    #print(fichas[i][ses][j][arq][k][l]["clave"])
                    if consulta == fichas[i][ses][j][arq][k][l]["valor"]:
                        nom.append(fichas[i]["nombre"])
                        ape.append(fichas[i]["apellidos"])
                        rut.append(fichas[i]["rut"])
                        pos.append(i)
                        con.append(j)
    return nom,ape,rut,pos,con

nom,ape,rut,pos,con = consigue(dato)
a,b = suma(nom,ape,rut,pos,con)
for i in range(len(a)):
    print(a[i])
    print(b[i])
#for i in range(len(nom)):
    #print(nom[i]+" "+ape[i]+"\n"+str(rut[i])+" pos:"+str(pos[i])+" consulta:"+str(con[i]))
#for i in range(len(nom)):
    #print(pos[i])
    #print(con[i])
#print(pos)
#print(cont)



    
    #print(data[0]['sesiones_medica'][0]['nombre_sesion'])


####llamada a los def#####
    #res = mostrar(dato,'sesiones_medica','nombre_profesional')
    #tabla(dato)
    #edad = edad(dato[0]['fecha_nacimiento'])
    #print(edad)

    #nom,val = suma(res)
    #graficar(nom, val)


    
