from rest_framework import routers
from django.urls import path
from . import views

# router = routers.DefaultRouter()
#
# router.register('auth', ApiView.as_view({'get': 'auth'}))

urlpatterns = [
    path('', views.APIView.as_view()),
]
