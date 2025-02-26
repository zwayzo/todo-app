from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def hello_word(request):
    return Response({'message': 'Hello, fromss django backend'})


@api_view(['GET'])
def test(request):
    return Response({'message': 'this is your test'})