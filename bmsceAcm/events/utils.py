from rest_framework.response import Response
from .models import Event
from .serializers import EventSerializer


def getEventsList(request):
    events = Event.objects.all()
    serializer = EventSerializer(events, many=True)
    return Response(serializer.data)


def getEventData(request, pk):
    event = Event.objects.get(id=pk)
    data = EventSerializer(event, many=False).data
    return Response(data)
