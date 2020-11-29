from rest_framework import routers
from .api import Visualizadordatos1
from django.urls import path
from django.conf.urls import url,include
from . import views
router = routers.DefaultRouter()
router.register('',Visualizadordatos1)
urlpatterns = [
    url(r'DB/',include(router.urls)),
    url(r'ObtieneArchivo/(?P<parametro>[\w\-]+)/$',views.GetDatos),
    url(r'estadisticaDesdeArchivo/',views.EstadisticaDesdeArchivo),
    url(r'mediaDesdeArchivo/',views.MediaDesdeArchivo),
    url(r'medianaDesdeArchivo/',views.MedianaDesdeArchivo),
    url(r'modaDesdeArchivo/',views.ModaDesdeArchivo),
    url(r'desviacionEstandarDesdeArchivo/',views.DesviacionEstandarDesdeArchivo),
    url(r'tablaFDesdeArchivo/',views.TablaFrecuenciaDesdeArchivo),
    url(r'ObtieneNombres/',views.GetNombres)
]