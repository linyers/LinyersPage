from django.urls import path
from .views import ProyectsView, Update_or_create_projects

app_name = 'projects'

urlpatterns = [
    path("projects/", ProyectsView.as_view(), name="proyects"),
    path("projects/Ln0S!0/", Update_or_create_projects, name="update_or_create_projects"),
]
