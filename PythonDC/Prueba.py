#!/usr/bin/env python
# -- coding: utf-8 --
import json

def calc(dato,petUno,petDos):
    guar = []
    for i in range(len(dato)):
        pos = dato[i]
        dat = pos[petUno]
        if (isinstance(dat, list)):
            for j in range(len(dat)):
                bus = dat[j]
                guar.append(bus[petDos])
                
        else:
            guar.append(dat)
    return(guar)        

def suma(val):
    nombres = []
    cont = []
    nombres.append(val[0])
    cont.append(0)
    for i in range(len(val)):
        resNom = nombres
        resCont = cont
        
        for j in range(len(nombres)):
    
            if nombres[j] == val[i]:
                cont[j] = cont[j]+1
                resCont = None
                resNom = None

        if resNom == nombres and resCont == cont:
            nombres.append(val[i])
            cont.append(1)

    print(nombres)
    print(cont)
        
        


with open('His_clin.json', encoding='utf-8') as file:
    data = json.load(file)

    res = calc(data,'sesiones_medica','nombre_sesion')
    print(res)
    suma(res)


    
