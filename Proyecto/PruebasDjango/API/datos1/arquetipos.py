import json

def Suma(n,a,r,p,c):
    cont = [] 
    rut = []
    con = []
    pos = 0
    nombresFin = [n[0]+" "+a[0]+"\n"+str(r[0])+" pos:"+str(p[0])+" consulta:"+str(c[0])] # Estructura que se devolvera 
    rut.append(r[0]) # Agrega datos a "rut"
    cont.append(0) # Agrega datos a "cont"
    con.append(str(c[0])) # Agrega datos a "con"
    for i in range(len(n)): # For que recorre todo el largo de "n" que en este caso es nombre
        resRut = rut # variables comparativas
        resCont = cont 
        for j in range(len(rut)): # for que recorre el largo de el rut
            if rut[j] == r[i]: # verifica que rut que se envia ahora sea igual a el anterior
                cont[j] = cont[j]+1  # se añade uno a contador
                resCont = None  # Reinicia el valor
                resRut = None # Reinicia el valor
                if i != 0: # Posicion actual que se encuentra en los arreglos es diferente a cero
                    nombresFin[pos] = nombresFin[pos]+","+str(c[i]) # Se separa po comas y se añade la consulta en string
        if resRut == rut and resCont == cont: # Verificar si se coinciden los datos de el rut y contador
            con.append(str(c[i])) # A con se le añade los datos de consulta
            pos = pos + 1 # añade uno a posicion
            nombresFin.append(n[i]+" "+a[i]+"\n"+str(r[i])+" pos:"+str(p[i])+" consulta:"+str(c[i])) # A nombresFin se le añade nombre, apellido, posicion y consulta 
            rut.append(r[i]) # rut se añade los datos de r
            cont.append(1) # c añade uno mas

    return nombresFin, cont # retorna a las variables nombradas

def Consigue(fichas,consulta,pet): #Funcion la cual consigue todos los datos que se encuentra dentro de fichas
    ses = "sesiones_medica" # se busca por el nombre sesiones_medica que se encuentra en el json dado
    arq = "arquetipos" # tambien se definio los datos que se encuentran dentro de arquetipos
    nom = [] #arreglo para nombre.
    ape = [] #arreglo para apellidos.
    rut = [] #arreglo para rut.
    pos = [] #arreglo para posicion.
    con = [] #arreglo para consultas
    edad = []#arreglo para la edad
    ban1,ban2 = False,False
    consulta=consulta.split("/")
    #if len(consulta)==2:
        #tipo = [1,3]
    #if len(consulta)==3:
        #tipo = [1,3,4]

    for i in range(len(fichas)): #arreglo que recorre fichas 
        for j in range(len(fichas[i][ses])): # recorremos las sesiones medicas
            for k in range(len(fichas[i][ses][j][arq])): # recorremos cada arquetipo
                for l in range(len(fichas[i][ses][j][arq][k])): #recorremos cada nodo presente en los arquetipos
                    if len(consulta)==1:
                        if consulta[0] == fichas[i][ses][j][arq][k][l]["valor"] and fichas[i][ses][j][arq][k][l]["tipo"]==1: # dentro de consultas consigue el "valor"
                            ban1 = True
                    if len(consulta)==2:
                        if consulta[0] == fichas[i][ses][j][arq][k][l]["valor"] and fichas[i][ses][j][arq][k][l]["tipo"]==1: # dentro de consultas consigue el "valor"
                            ban1 = True
                        if consulta[1] == fichas[i][ses][j][arq][k][l]["valor"] and fichas[i][ses][j][arq][k][l]["tipo"]==4:
                            ban2 = True
            if len(consulta) == 1:
                if ban1:
                    if pet == 1: 
                        nom.append(fichas[i]["nombre"]) #Añade los datos de nombre a la variable "nom"
                        ape.append(fichas[i]["apellidos"]) #Añade los datos de apellidos a la variable "ape"
                        rut.append(fichas[i]["rut"]) #Añade los datos de rut a la variable "rut"
                        pos.append(i) #Añade los datos de i a la variable "pos"
                        con.append(j) #Añade los datos de j a la variable con
                    if pet == 2: 
                        edad.append(fichas[i]["fecha_nacimiento"]) # añade decha de nacimiento a "edad"
            if len(consulta) == 2:
                if ban1 and ban2:
                    if pet == 1: 
                        nom.append(fichas[i]["nombre"]) #Añade los datos de nombre a la variable "nom"
                        ape.append(fichas[i]["apellidos"]) #Añade los datos de apellidos a la variable "ape"
                        rut.append(fichas[i]["rut"]) #Añade los datos de rut a la variable "rut"
                        pos.append(i) #Añade los datos de i a la variable "pos"
                        con.append(j) #Añade los datos de j a la variable con
                    if pet == 2: 
                        edad.append(fichas[i]["fecha_nacimiento"]) # añade decha de nacimiento a "edad"
            ban1,ban2 = False,False
    return nom,ape,rut,pos,con,edad

def ConseguirContenidos(arquetipos):
    ArquetiposJson=json.loads(arquetipos) # Carga el json arquetipos
    Contenidos1=[] # crea un arreglo de contenidos
    Contenidos2=[]
    for i in range(len(ArquetiposJson)): 
        for Key in ArquetiposJson[i]: 
            if Key=="text":
                Origen1=ArquetiposJson[i][Key]
            if "estructura" in Key:
                for Key2 in ArquetiposJson[i][Key]:
                    #if Key2=="text":
                        #Origen2=ArquetiposJson[i][Key][Key2]
                    if "nodo" in Key2:
                        for Key3 in ArquetiposJson[i][Key][Key2]:
                            if Key3=="text":
                                Origen3=ArquetiposJson[i][Key][Key2][Key3]
                            if "contenido" in Key3:
                                if (ArquetiposJson[i][Key][Key2][Key3]!=[]):
                                    for Contenido in ArquetiposJson[i][Key][Key2][Key3]:
                                        #Contenidos.append((Origen1,Origen2,Origen3,Contenido["text"]))
                                        #Contenidos.append((Origen1,Origen3,Contenido["text"]))
                                        Contenidos1.append((Origen1))
                                        Contenidos2.append((Origen1+"/"+Contenido["text"]))
                                else:
                                    Contenidos1.append((Origen1))
    Contenidos=Contenidos1+Contenidos2
    Contenidos=list(dict.fromkeys(Contenidos))
    return Contenidos

    