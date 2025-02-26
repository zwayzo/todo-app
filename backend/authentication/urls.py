from django.urls import path
from . import views

urlpatterns = [
    path('hello/', views.hello_word),
    path('test/', views.test),
]
