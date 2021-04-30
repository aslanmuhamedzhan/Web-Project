from django.urls import path

from api.views import feedback, category_list, ProductList, OrderDetails, OrderList
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('categories/', category_list),
    path('products/all', ProductList.as_view()),
    path('orders/<int:pk>/', OrderDetails.as_view()),
    path('feedbacks/', feedback),
    path('orders/', OrderList.as_view()),
    path('login/', obtain_jwt_token)
]