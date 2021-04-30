from django.contrib import admin

from api.models import Category, ProductItem, Order, Feedback

admin.site.register(Category)
admin.site.register(ProductItem)
admin.site.register(Order)
admin.site.register(Feedback)

