from matplotlib import pyplot as plt
import pandas as pd
import json
import math

cortes = []

d = [1,2,3,4,5,6]
df = pd.DataFrame({"data":d})
print(df)

n=df.shape
n = n[0]
#print(n)
m=1+math.ceil(3.322*math.log10(n))
#print(m)
I=max(d)-min(d)
#print(I)

C = I/m
#print(C)
cortes.append(min(d))
while(max(cortes)<max(d)):
    cortes.append(max(cortes)+C)
print(cortes) 

df.insert(1,"rangos",cortes)
print(df)
