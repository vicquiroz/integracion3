import json
from datetime import datetime
from dateutil.relativedelta import relativedelta

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

def consigue(fichas,consulta,pet):
    ses = "sesiones_medica"
    arq = "arquetipos"
    nom = []
    ape = []
    rut = []
    pos = []
    con = []
    edad = []
    for i in range(len(fichas)):
        for j in range(len(fichas[i][ses])):
            for k in range(len(fichas[i][ses][j][arq])):
                for l in range(len(fichas[i][ses][j][arq][k])):
                    #print(fichas[i][ses][j][arq][k][l]["clave"])
                    if consulta == fichas[i][ses][j][arq][k][l]["valor"]:
                        if pet == 1:
                            nom.append(fichas[i]["nombre"])
                            ape.append(fichas[i]["apellidos"])
                            rut.append(fichas[i]["rut"])
                            pos.append(i)
                            con.append(j)
                        if pet == 2:
                            edad.append(fichas[i]["fecha_nacimiento"])
    return nom,ape,rut,pos,con,edad

def conseguirContenidos(arquetipos):
    ArquetiposJson=json.loads(arquetipos)
    Contenidos=[]
    for i in range(len(ArquetiposJson)):
        for Key in ArquetiposJson[i]:
            if Key=="text":
                Origen1=ArquetiposJson[i][Key]
            if "estructura" in Key:
                for Key2 in ArquetiposJson[i][Key]:
                    if Key2=="text":
                        Origen2=ArquetiposJson[i][Key][Key2]
                    if "nodo" in Key2:
                        for Key3 in ArquetiposJson[i][Key][Key2]:
                            if Key3=="text":
                                Origen3=ArquetiposJson[i][Key][Key2][Key3]
                            if "contenido" in Key3:
                                if (ArquetiposJson[i][Key][Key2][Key3]!=[]):
                                    for Contenido in ArquetiposJson[i][Key][Key2][Key3]:
                                        Contenidos.append((Origen1,Origen2,Origen3,Contenido["text"]))
    #for X,Y in Contenidos:
        #print(X,"-",Y)
    return Contenidos

    