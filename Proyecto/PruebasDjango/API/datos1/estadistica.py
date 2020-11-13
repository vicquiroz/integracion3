#!/usr/bin/env python
# -- coding: utf-8 --
import json
from matplotlib import pyplot as plt
import pandas as pd
from datetime import datetime
from dateutil.relativedelta import relativedelta
import statistics as stats

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
        
    
def graficar(ejex, ejey):
    ancho= 0.5 #ancho para el grafico de barras
    plt.bar(ejex, ejey, ancho, color=(0, 0.5, 1, 1)) #se pasan los datos para completar 
    plt.savefig('grafico.png', transparent=False)#se exporta el grafico en png
    plt.clf()
    #plt.show()

def tabla(dato):
    fig, ax = plt.subplots(dpi=500)
    fig.patch.set_visible(False)
    ax.axis('off')
    d = dato[0]
    del d['profesionales_que_atendieron']
    del d['sesiones_medica']
    print(d)
    df = pd.DataFrame(data=d)
    print(df)
    ax.table(cellText=df.values, rowLabels=["valor"],colLabels=df.columns,cellLoc='center', loc='center')
    fig.tight_layout()
    plt.show()

def CalcularMedia(datos):
    return ["Media",stats.mean(datos)]

def CalcularModa(datos):
    try:
        MM=stats.multimode(datos)
        M=stats.mode(datos)
        return [["MultiModa",MM],["Moda",M]]
    except:
        print("ERROR - No se pueden ejecutar la funcion con los datos")

def CalcularMediana(datos):
    try:
        M=stats.median(datos)
        MG=stats.median_grouped(datos)
        MA=stats.median_high(datos)
        ML=stats.median_low(datos)
        return [["Mediana",M],["MedianaAgrupada",MG],["MedianaAlta",MA],["MedianaBaja",ML]]
    except:
        print("ERROR - No se pueden ejecutar la funcion con los datos")

def CalcularDesviacionE(datos):
    try:
        DVP=stats.stdev(datos)
        DVM=stats.stdev(datos)
        return [["DesviacionEstandarPoblacion",DVP],["DesviacionEstandarMuestra",DVM]]
    except:
        print("ERROR - No se pueden ejecutar la funcion con los datos")



#with open('His_clin.json', encoding='utf-8') as file: #abrir imagen con utf-8 para mayor comprension
    #dato = json.load(file) #guardamos el contenido del json en data
    #print(data[0]['sesiones_medica'][0]['nombre_sesion'])


####llamada a los def#####
    #res = mostrar(dato,'sesiones_medica','nombre_profesional')
    #tabla(dato)
    #edad = edad(dato[0]['fecha_nacimiento'])
    #print(edad)

    #nom,val = suma(res)
    #graficar(nom, val)


    
