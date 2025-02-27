from django.urls import path
from . import views

urlpatterns = [
    path('hello/', views.hello_word),
    path('test/', views.test),
    path('signup/', views.signup, name='signup'),
    path('signin/', views.signin, name='signin'),
    path('signout/', views.signout, name='signout'),
    path('getState/', views.getState, name='getState'),
]
