from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated

from .models import Proyect
from .services import get_repos
from .serializers import ProyectSerializer
from .pagination import CustomProjectsPagination


class ProyectsView(ListAPIView):
    serializer_class = ProyectSerializer
    queryset = Proyect.objects.all()
    pagination_class = CustomProjectsPagination


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def Update_or_create_projects(request):
    response = get_repos()

    repos = ({
            'id': r.get('id'),
            'name': r.get('name'),
            'url': r.get('html_url'),
            'created_at': r.get('created_at'),
            'updated_at': r.get('updated_at'),
            'pushed_at': r.get('pushed_at'),
            } for r in response)
            
    for repo in repos:
        proyect = Proyect.objects.filter(id=repo.get('id'))
        if proyect:
            proyect.update(**repo)
        else:
            Proyect.objects.update_or_create(**repo)
    
    return Response({'message': 'repos created or updated successfully'})