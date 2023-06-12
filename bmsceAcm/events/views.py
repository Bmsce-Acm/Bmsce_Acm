# from django.http import response
# from django.shortcuts import render
# from rest_framework.response import Response
# from rest_framework.decorators import api_view
# from rest_framework.serializers import Serializer
# from .models import Event
# from .serializers import EventSerializer
# from events import serializers
# from .utils import getEventsList, getEventData


# @api_view(['GET'])
# def getRoutes(request):

#     routes = [
#         {
#             'Endpoint': '/events/',
#             'method': 'GET',
#             'body': None,
#             'description': 'Returns an array of notes'
#         },
#         {
#             'Endpoint': '/events/id',
#             'method': 'GET',
#             'body': None,
#             'description': 'Returns a single note object'
#         },
#     ]
#     return Response(routes)


# @api_view(['GET'])
# def getEvents(request):

#     if request.method == 'GET':
#         return getEventsList(request)


# @api_view(['GET'])
# def getEvent(request, pk):

#     if request.method == 'GET':
#         return getEventData(request, pk)
