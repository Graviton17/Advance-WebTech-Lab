from flask import Flask
from database.db import db
from service.product import product_bp

app = Flask(__name__)

app.secret_key = 'Gravtion'

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///product.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

app.register_blueprint(product_bp)

from flask import render_template
@app.route('/')
def home():
    return render_template('index.html')

db.init_app(app)
with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)