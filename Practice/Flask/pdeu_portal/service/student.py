from flask import Blueprint, render_template, request
from database.model.student import Student
from database.db import db

student_bp = Blueprint('student', __name__,)

@student_bp.route('/greeting')
def greeting():
    return render_template('student_greeting.html', title='Greeting Page')

@student_bp.route('/profile/<int:id>')
def profile(id):
    student = Student.query.get(id)
    return render_template('student_profile.html', title='Profile Page', student=student)

@student_bp.route('/display')
def display():
    students = Student.query.all()

    return render_template('student_display.html', title='Display Page', students=students)

@student_bp.route('/delete/<int:id>')
def delete(id):
    student = Student.query.get(id)
    if student:
        db.session.delete(student)
        db.session.commit()
        return f"Student with id {id} deleted successfully!", 200
    else:
        return f"Student with id {id} not found!", 404
    
@student_bp.route('/update/<int:id>', methods=['GET', 'POST'])
def update(id):
    if request.method == 'GET':
        student = Student.query.get(id)
        if student:
            return render_template('student_update.html', title='Update Page', student=student)
        else:
            return f"Student with id {id} not found!", 404
        
    if request.method == 'POST':
        student = Student.query.get(id)
        if student:
            name = request.form.get('name')
            email = request.form.get('email')
            password = request.form.get('password')

            if name:
                student.name = name
            
            if email:
                student.email = email

            if password:
                student.password = password

            db.session.commit()
            return f"Student with id {id} updated successfully!", 200
        else:
            return f"Student with id {id} not found!", 404
        
    return "Invalid request method!", 400