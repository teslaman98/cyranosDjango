from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include
from main import views
from . import views

urlpatterns = [
  path('', views.splash, name='splash'),
]