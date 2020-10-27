from rest_framework import routers
from .api import Visualizadordatos1
from django.urls import path
from django.conf.urls import url,include
from . import views
router = routers.DefaultRouter()
router.register('',Visualizadordatos1)
urlpatterns = [
    url(r'DB/',include(router.urls)),
    url(r'testingP/(?P<parametro>[\w\-]+)/$',views.GetDatos)
]