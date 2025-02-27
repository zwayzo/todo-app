from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth import logout

@api_view(['GET'])
def hello_word(request):
    return Response({'message': 'Hello, fromss django backend'})


@api_view(['GET'])
def test(request):
    return Response({'message': 'this is your test'})



@api_view(['POST'])
def signup(request):
    print("request:", request.data)
    """Handles user registration"""
    username = request.data.get('username')
    password = request.data.get('password')
    email = request.data.get('email')

    if User.objects.filter(username=username).exists() or User.objects.filter(email=email).exists():
        return Response({"error": "Username already taken"}, status=status.HTTP_400_BAD_REQUEST)

    user = User.objects.create(username=username, email=email)
    user.set_password(password)
    user.save()
    login(request, request.user)
    return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)

@api_view(['POST'])
def signin(request):
    print("signin request:",request.data)
    """Handles user login"""
    username = request.data.get('username')
    password = request.data.get('password')
    
    try:
        user = User.objects.get(username=username)
    except ObjectDoesNotExist:
        return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)
    user = authenticate(username=username, password=password)
    if (user is not None):
        login(request, user)
        if user.is_authenticated:   
            print("user is logged\n")
        return Response({"message": "Login successful"}, status=status.HTTP_200_OK)
    else:
        return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def signout(request):
    """Logs out the user by clearing their session"""
    logout(request)  # This removes the user from the request session
    return Response({"message": "Logged out successfully"}, status=status.HTTP_200_OK)


@api_view(['GET'])
def getState(request):
    print("check\n")
    user = User.objects.get(username="zizo")
    if user.is_authenticated:
        return Response({"message": "User is authenticated"}, status=status.HTTP_200_OK)
    return Response({"message": "User is not authenticated"}, status=status.HTTP_401_UNAUTHORIZED) 