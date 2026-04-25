from .models import Student
from django.forms import ModelForm

class StudentForm(ModelForm):
    class Meta:
        model = Student
        fields=["name", "email", "password"]