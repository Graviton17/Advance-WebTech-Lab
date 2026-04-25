from service.student import student_bp
from service.auth import auth_bp
from flask import Flask, render_template
from database.db import db

app = Flask(__name__)

app.secret_key = 'graviton + haachhii'

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///pdeu.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
with app.app_context():
    db.create_all()

app.register_blueprint(student_bp, url_prefix='/student')
app.register_blueprint(auth_bp, url_prefix='/auth')

@app.route('/')
def home():
    return render_template('index.html', title='PDEU Student Portal', username="None")

if __name__ == '__main__':
    app.run(debug=True)