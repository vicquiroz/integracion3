from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

def saludo(request):
    return HttpResponse("Hola Mundo!!!<br>",request)

def despedida(request):
    return HttpResponse("Bye bye!!!")