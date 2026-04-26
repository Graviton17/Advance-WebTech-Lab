from django.shortcuts import render, get_object_or_404, redirect
from .models import Product
from .form import ProductForm

# Create your views here.
def list_product(request):
    products = Product.objects.all()
    return render(request, "list_product.html", {"products": products})

def get_product(request, pk):
    product = get_object_or_404(Product, pk=pk)
    return render(request, "product_detail.html", {"product": product})
    
def create_product(request):
    if request.method == 'POST':
        form = ProductForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect(list_product)
    else:
        form = ProductForm()
        
    return render(request, "create_product.html", {"form": form})
    
def update_product(request, pk):
    product = get_object_or_404(Product, pk=pk)

    if request.method == 'POST':
        form = ProductForm(request.POST, instance=product)
        if form.is_valid():
            form.save()
            return redirect(list_product)
    else:
        form = ProductForm(instance=product)
        
    return render(request, 'create_product.html', {"form": form})
    
def delete_product(request, pk):
    product = get_object_or_404(Product, pk=pk)
    product.delete()
    return redirect(list_product)
