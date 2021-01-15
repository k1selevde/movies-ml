from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.views import APIView
from django.core import serializers
from django.http import HttpResponse
# Create your views here.
import json
from django.db.models import DateTimeField, Count
from .models import Movieorderitems, Cinemas, Recsettings, Recommendations, Movies




def index(request):
    return render(request, 'index.html', {})

class RecommendationsView(APIView):
    def get(self, request):
        data = Recommendations.objects.values_list('movieid', flat=True)
        id__arr = list(data)
        set__arr = list(set(id__arr))
        count__dict = {}
        countKeys = []
        for i in range(len(set__arr)):
            countKeys.append(id__arr.count(set__arr[i]))

        response__id__counts = dict(zip(set__arr, countKeys))
        movies__res = []
        for i in range(len(set__arr)):
            movies__res.append(Movies.objects.filter(id=set__arr[i]).values())

        return Response({'rec': response__id__counts, 'movies': movies__res})

class TableView(APIView):
    def get(self, request):
        print('Wait...')
        countM = Movieorderitems.objects.filter(createdat__range=('2018-10-25', '2018-10-29')).count()

        print(countM)
        return Response({'post': 'auth'})


class AuthView(APIView):

    def get(self, requiest):
        return Response({'auth': 'table'})

    def post(self, request):
        return Response({'POST': 'auth'})



class MessageView(APIView):

    def get(self, requiest):
        object = Recsettings.objects.all().first()
        return HttpResponse({object.text})

    def post(self, request):
        new_str = request.body.decode('utf-8')
        resp_mes = json.dumps(new_str)
        js = json.loads(new_str)
        message = js['value']
        object = Recsettings.objects.all().first()
        object.text = message
        object.save()
        return HttpResponse(resp_mes)


class VisitView(APIView):
    def get(self, requiest, hall, month, year, count):
        res = []
        # print('data : {} - {}; hall - {}; count - {}'.format(year, month, hall, count))
        for i in range(count-1):
            first_d = str(i+1).zfill(2)
            second_d = str(i+2).zfill(2)
            res.append(Movieorderitems.objects.filter(createdat__range=('{}-{}-{}'.format(year, month, first_d), '{}-{}-{}'.format(year, month, second_d)), hallid=hall).count())
        # print('data : {} - {}; hall - {}; count - {}'.format(year, month, hall, count))
        # print('res : ',res)
        return Response({'visit': res})


class CinemasView(APIView):
    def get(self, requiest):
        data = list(Cinemas.objects.exclude(hallid__isnull=True))
        qs_json = serializers.serialize('json', data)
        return HttpResponse(qs_json, content_type='application/json')


class FreqView(APIView):
    def get(self, requiest, type, count):
        object = Recsettings.objects.all().first()

        if (type == 'phone'):
            return HttpResponse({object.phonefreq})
        if (type == 'mail'):
            return HttpResponse({object.emailfreq})
        return Response({'error'})

    def post(self, request, type, count):
        # print('type :', type)
        object = Recsettings.objects.all().first()
        if (type == 'phone'):
            # print('Real phone :', count)
            object.phonefreq = count
        if (type == 'mail'):
            # print('Real mail :', count)
            object.emailfreq = count

        object.save()
        # print('first in SETTINGS', object)
        return Response({'success'})