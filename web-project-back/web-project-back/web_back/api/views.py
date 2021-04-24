from django.shortcuts import render
from django import views
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from api.serializers import ProductItemSerializer, CategorySerializer, OrderSerializer
from api.models import Category, ProductItem, Order
import json


def category_list(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        # categories_json = [category.to_json() for category in categories]
        return JsonResponse(serializer.data, safe=False)


def product_list(request):
    if request.method == 'GET':
        products = ProductItem.objects.all()
        serializer = ProductItemSerializer(products, many=True)
    return JsonResponse(serializer.data, safe=False)


def products_by_category(request, name):
    if request.method == 'GET':
        category = Category.objects.get(name=name)
        products = category.productitem_set
        serializer = ProductItemSerializer(products, many=True)
    return JsonResponse(serializer.data, safe=False)


@csrf_exempt
def order_list(request):
    if request.method == 'GET':
        orders = Order.objects.all()
        serializer = OrderSerializer(orders, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        # try:
        order = Order.objects.create(
            ordererAdress=data["ordererAdress"],
            ordererFirstName=data["ordererFirstName"],
            ordererLastName=data["ordererLastName"],
            ordererPostalCode=data["ordererPostalCode"]
        )
        # except Exception as e:
        # return JsonResponse({'message':str(e)})
        order_json = OrderSerializer(order)
        return JsonResponse(order_json.data, safe=False)
