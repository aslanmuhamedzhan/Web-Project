from django.contrib import admin

from api.models import Category, ProductItem, Order

admin.site.register(Category)
admin.site.register(ProductItem)
admin.site.register(Order)

