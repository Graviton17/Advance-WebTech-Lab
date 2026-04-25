from django.urls import path
from . import views

urlpatterns = [
  path('', views.student_list, name="Student List"),
  path('create', views.create_student, name="Create Student"),
  path('<int:pk>', views.get_student, name="Student Details"),
  path('update/<int:pk>', views.update_student, name="Update Student"),
  path('delete/<int:pk>', views.delete_student, name="Delete Student"),
]