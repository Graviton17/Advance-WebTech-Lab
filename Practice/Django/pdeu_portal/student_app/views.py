from django.shortcuts import render, get_object_or_404, redirect
from .models import Student
from .form import StudentForm

# Create your views here.
def student_list(request):
    students = Student.objects.all()
    return render(request, 'students_list.html', {"students": students})

def get_student(request, pk):
    student = get_object_or_404(Student, pk=pk)
    if student:
        return render(request, 'student_detail.html', {"student": student})
    else:
        return "Student not found."

def create_student(request):
    if request.method == 'POST':
        form = StudentForm(request.POST)
        if form.is_valid():
            form.save()

        return redirect(student_list)
    else:
        return render(request, "student_from.html")


def update_student(request, pk):
    student = get_object_or_404(Student, pk=pk)

    if request.method == 'POST':
        if student:
            form = StudentForm(request.POST, instance=student)
            if form.is_valid():
                form.save()

            return redirect(student_list)
        else:
            return "Student not found"
    else:
        return render(request, 'student_update.html', {"student": student})
    
def delete_student(request, pk):
    student = get_object_or_404(Student, pk=pk)

    if request.method == 'POST':
        student.delete()
        return redirect(student_list)
    
    return "Page doesn't exisit 404"