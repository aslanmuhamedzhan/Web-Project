from django.urls import path

from api.views import category_list, product_list, products_by_category, order_list

urlpatterns = [
    path('categories/', category_list),
    path('products/all', product_list),
    path('products/<str:name>', products_by_category),
    path('orders/', order_list)
]