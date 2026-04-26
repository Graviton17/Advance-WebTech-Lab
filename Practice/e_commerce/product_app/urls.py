from django.urls import path
from . import views

urlpatterns = [
    path('', views.list_product, name='list_product'),
    path('<int:pk>/', views.get_product, name='get_product'),
    path('create/', views.create_product, name='create_product'),
    path('<int:pk>/update/', views.update_product, name='update_product'),
    path('<int:pk>/delete/', views.delete_product, name='delete_product'),
]