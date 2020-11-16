from matplotlib import pyplot as plt
import pandas as pd
import json
import math
import bisect

cortes = []
aux = []
inter = []
marca = []
f = []
fr = []
F = []
Fr = []
valores = []

d = [1,2,3,4,5,6,3,4,5,3,1,1,2,2,3,3,3,3,4,6,6,6,6,7,8,9,10]


n=len(d)

m=1+math.ceil(3.322*math.log10(n))
#print(m)
I=max(d)-min(d)
#print(I)

C = I/m
#print(C)
cortes.append(min(d))
while(max(cortes)<max(d)):
    cortes.append(max(cortes)+C)
#print(cortes) 

for i in range(len(cortes)-1): 
    if(i==len(cortes)-2):
        inter.append("[" + str(cortes[i]) + "," + str(cortes[i+1]) + "]")
    else:
        inter.append("[" + str(cortes[i]) + "," + str(cortes[i+1]) + ")")
    marca.append((cortes[i]+cortes[i+1])/2)

df = pd.DataFrame({"valor":inter})

df.insert(1,"MC",marca)

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

df.insert(2,"f",f)

fr = f.copy()
fr = list(map(lambda x: round(x / n, 2), fr))

df.insert(3,"fr",fr)

for i in range(len(f)):
    if i == 0:
        Fr[i] = Fr[i]+fr[i]
        F[i] = F[i]+f[i]
    else:
        Fr[i] = round(Fr[i-1]+fr[i],2)
        F[i] = F[i-1]+f[i]
df.insert(4,"F",F)
df.insert(5,"Fr",Fr)

fig, ax = plt.subplots(dpi=200)
fig.patch.set_visible(False)
ax.axis('off')
ax.table(cellText=df.values,colLabels=df.columns,cellLoc='center', loc='center')
fig.tight_layout()
plt.show()
#plt.savefig


