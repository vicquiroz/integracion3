import json
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

def consigue(fichas,consulta):
    ses = "sesiones_medica"
    arq = "arquetipos"
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