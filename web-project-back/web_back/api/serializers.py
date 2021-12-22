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
    category = CategorySerializer()

    def create(self, validated_data):
        product = ProductItem.objects.create(name=validated_data['name'], 
                                        description=validated_data['description'],
                                        price=validated_data['price'],
                                        img=validated_data['img'],
                                        category=Category.objects.get(id=validated_data['category'].get('id')))
        return product

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'


