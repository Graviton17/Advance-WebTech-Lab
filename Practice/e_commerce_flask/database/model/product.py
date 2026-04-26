from database.db import db

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    description = db.Column(db.String)
    price = db.Column(db.Integer)
    category = db.Column(db.String(100))
    available_stock = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())

    def __init__(self, name, description, price, category, available_stock):
        super().__init__()
        self.name = name
        self.description = description
        self.price = price
        self.category = category
        self.available_stock = available_stock
