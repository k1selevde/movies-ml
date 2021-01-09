from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.views import APIView
# Create your views here.
import json




def index(request):
    return render(request, 'index.html', {})


class TableView(APIView):
    def get(self, request):
        return Response({'post': 'auth'})


class AuthView(APIView):
    def get(self, requiest):
        return Response({'auth': 'table'})

    def post(self, request):
        return Response({'POST': 'auth'})



class MessageView(APIView):
    def get(self, requiest):
        return Response({'statistics': 'table'})

    def post(self, request):
        return Response({'POST': 'user'})


class VisitView(APIView):
    def get(self, requiest):
        return Response({'statistics': 'table'})

    def post(self, request):
        return Response({'POST': 'user'})


class FreqView(APIView):
    def get(self, requiest):
        return Response({'settings': 'table'})

    def post(self, request):
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        content = body['content']
        return Response({'POST': 'settings, ', 'content' : content})