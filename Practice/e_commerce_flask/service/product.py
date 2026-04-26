from flask import render_template, request, redirect, url_for
from database.model.product import Product
from flask import Blueprint
from database.db import db

product_bp = Blueprint('product', __name__)

@product_bp.route('/products')
def list_products():
    products = Product.query.all()

    return render_template('products.html', products=products)

@product_bp.route('/product/<int:id>', methods=['GET'])
def get_product(id: int):
    product = Product.query.filter_by(id=id).first()

    if product is None:
        return "Product not found", 404

    return render_template('product.html', product=product)

@product_bp.route('/create', methods=['GET', 'POST'])
def create_product():
    if request.method == 'POST':
        name = request.form.get('name')
        description = request.form.get('description')
        price = request.form.get('price')
        category = request.form.get('category')
        available_stock = request.form.get('available_stock')

        new_product = Product(
            name=name,
            description=description,
            price=price,
            category=category,
            available_stock=available_stock
        )
        
        db.session.add(new_product)
        db.session.commit()
        return render_template('product.html', product=new_product, message="Product created successfully!")

    return render_template('create_product.html')

@product_bp.route('/update/<int:id>', methods=['GET', 'POST'])
def update_product(id: int):
    product = Product.query.get_or_404(id)
    if request.method == 'POST':
        product.name = request.form.get('name')
        product.description = request.form.get('description')
        product.price = request.form.get('price')
        product.category = request.form.get('category')
        product.available_stock = request.form.get('available_stock')
        
        
        db.session.commit()
        return render_template('product.html', product=product, message="Product updated successfully!")
    
    return render_template('update_product.html', product=product)

@product_bp.route('/delete/<int:id>', methods=['POST'])
def delete_product(id: int):
    product = Product.query.get_or_404(id)
    
    db.session.delete(product)
    db.session.commit()
    return redirect(url_for('product.list_products'))
