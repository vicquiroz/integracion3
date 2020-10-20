from rest_framework import routers
from .api import Visualizadordatos1

router=routers.DefaultRouter()
router.register('api/datos1',Visualizadordatos1,'datos1')

urlpatterns = router.urls
