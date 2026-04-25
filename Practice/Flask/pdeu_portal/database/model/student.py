from database.db import db

class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=True)

    def __init__(self, name, email, password=None):
        super().__init__()
        self.name = name
        self.email = email
        self.password = password

