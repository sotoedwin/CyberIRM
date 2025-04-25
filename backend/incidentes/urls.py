from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView
from .views import MeView

urlpatterns = [
    path('me/', MeView.as_view(), name='me'),  # Ruta ya existente
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # Ruta para login
]
