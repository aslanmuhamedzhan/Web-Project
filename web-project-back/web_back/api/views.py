from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import Http404
from rest_framework import status
from django import views
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from api.serializers import ProductItemSerializer, CategorySerializer, OrderSerializer, FeedbackSerializer
from api.models import Category, ProductItem, Order, Feedback
import json


# class CategoryList(APIView):
#     categories = Category.objects.all()
#     serializer = CategorySerializer(categories, many=True)
#     def get(self, request):
#         return Response(self.serializer.data, status=status.HTTP_200_OK)

#     def post(self, request):
#         if self.serializer.is_valid():
#             self.serializer.save()
#             return Response(self.serializer.data, status=status.HTTP_200_OK)
#         return Response(self.serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProductList(APIView):
    products = ProductItem.objects.all()
    serializer = ProductItemSerializer(products, many=True)

    def get(self, request):
        return Response(self.serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        if self.serializer.is_valid():
            self.serializer.save()
            return Response(self.serializer.data, status=status.HTTP_200_OK)
        return Response(self.serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    



def category_list(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return JsonResponse(serializer.data, safe=False)


# def product_list(request):
#     if request.method == 'GET':
#         products = ProductItem.objects.all()
#         serializer = ProductItemSerializer(products, many=True)
#     return JsonResponse(serializer.data, safe=False)



# @csrf_exempt
# def order_list(request):
#     if request.method == 'GET':
#         orders = Order.objects.all()
#         serializer = OrderSerializer(orders, many=True)
#         return JsonResponse(serializer.data, safe=False)
#     elif request.method == 'POST':
#         data = json.loads(request.body)
#         order = Order.objects.create(
#             ordererAdress=data["ordererAdress"],
#             ordererFirstName=data["ordererFirstName"],
#             ordererLastName=data["ordererLastName"],
#             ordererPostalCode=data["ordererPostalCode"]
#         )
#         order_json = OrderSerializer(order)
#         return JsonResponse(order_json.data, safe=False)

class OrderList(APIView):
    orders = Order.objects.all()

    def get(self, request):
        serializer = OrderSerializer(self.orders, many=True)
        return Response(serializer.data, status = status.HTTP_200_OK)

    def post(self, request):
        serializer = OrderSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)



class OrderDetails(APIView):
    def getOrder(self, pk):
        try:
            return Order.objects.get(id=pk)
        except Order.DoesNotExist as e:
            raise Http404

    def get(self,request, pk=None):
        order = self.getOrder(pk)
        serializer = OrderSerializer(order)
        return  Response(serializer.data)
    
    def put(self, request, pk=None):
        order = self.getOrder(pk)
        serializer = OrderSerializer(instance = order, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_200_OK)
        return Response(self.serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, pk=None):
        order = self.getOrder(pk)
        order.delete()
        return Response({'message': 'deleted'}, status=204)


def feedback(request):
    feedbacks = Feedback.objects.all()
    
    serializer = FeedbackSerializer(feedbacks, many=True)
    if request.method == 'GET':
        return JsonResponse(serializer.data, safe=False)