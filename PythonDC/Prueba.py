#!/usr/bin/env python
# -- coding: utf-8 --
import json
from matplotlib import pyplot as plt

def mostrar(dato,petUno,petDos):
    guar = [] #arreglo que contendra los datos pedidos
    for i in range(len(dato)):
        pos = dato[i] #almacena los datos
        dat = pos[petUno] #va a la direccion de la primera peticion
        if (isinstance(dat, list)): #si la primera peticion es un arreglo
            for j in range(len(dat)): 
                bus = dat[j] #almacena los datos
                guar.append(bus[petDos])#guarda los datos de la segunda peticion 
                
        else: #sí el anterior no es un arreglo 
            guar.append(dat) #se almacenan los datos 
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
        
    
def graficar(ejex, ejey):
    ancho= 0.5 #ancho para el grafico de barras
    plt.bar(ejex, ejey, ancho) #se pasan los datos para completar 
    plt.savefig('grafico.png', transparent=False)#se exporta el grafico en png
    plt.show()

with open('His_clin.json', encoding='utf-8') as file: #abrir imagen con utf-8 para mayor comprension
    data = json.load(file) #guardamos el contenido del json en data



####llamada a los def#####
    res = mostrar(data,'sesiones_medica','nombre_profesional')
    nom,val = suma(res)
    graficar(nom, val)


    
