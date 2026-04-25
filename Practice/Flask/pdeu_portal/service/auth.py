from flask import Blueprint, render_template, request
from database.model.student import Student
from database.db import db

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/login', methods=['GET','POST'])
def login():
    if request.method == 'GET':
        return render_template('student_login.html', title='Login Page')

    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')

        if not email or not password:
            return "Email and password are required!", 400
        
        student = Student.query.filter_by(email=email).first()
        if not student or student.password != password:
            return "Invalid email or password!", 400

        return render_template('index.html', title='PDEU Student Portal', username=student.name)
    
    return "Invalid request method!", 400

@auth_bp.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'GET':
        return render_template('student_register.html', title='Register Page')

    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        password = request.form.get('password')

        if not name or not email or not password:
            return "Name, email, and password are required!", 400
        
        existing_student = Student.query.filter_by(email=email).first()
        if existing_student:
            return "Email already registered!", 400

        new_student = Student(name=name, email=email, password=password)
        db.session.add(new_student)
        db.session.commit()

        return render_template('student_register.html', title='Register Page', success="Registration successful!")
    
    return "Invalid request method!", 400
