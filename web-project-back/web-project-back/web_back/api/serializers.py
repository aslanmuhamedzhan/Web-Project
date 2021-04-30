from rest_framework  import serializers

from api.models import Category, ProductItem, Order, Feedback


class CategorySerializer(serializers.Serializer):
    id=serializers.IntegerField(read_only=True)
    name=serializers.CharField()

class FeedbackSerializer(serializers.ModelSerializer):
    id=serializers.IntegerField(read_only=True)
    class Meta:
        model = Feedback 
        fields = '__all__'

class ProductItemSerializer(serializers.Serializer):
    id=serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    price = serializers.FloatField()
    img=serializers.CharField()
    category = CategorySerializer() # Gotta google this(Serializing foreign key)

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'


