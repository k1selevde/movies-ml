"""djangoApi URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""


from django.contrib import admin
from django.urls import path, include


from backend.views import index, AuthView, TableView, VisitView, MessageView, FreqView, CinemasView, RecommendationsView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/visit/<int:hall>/<str:year>/<str:month>/<int:count>/', VisitView.as_view()),
    path('api/cinemas/', CinemasView.as_view()),
    path('api/message/', MessageView.as_view()),
    path('api/freq/<str:type>/<int:count>/', FreqView.as_view()),
    path('api/table/', TableView.as_view()),
    path('api/rec/', RecommendationsView.as_view()),
    path('', index),
]


