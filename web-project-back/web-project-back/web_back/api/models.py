from django.db import models


class Category(models.Model):
    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'
    
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Order(models.Model):
    class Meta:
        verbose_name = 'Order'
        verbose_name_plural = 'Orders'

    ordererFirstName = models.CharField(max_length=255)
    ordererLastName = models.CharField(max_length=255)
    ordererAdress = models.CharField(max_length=255)
    ordererPostalCode = models.CharField(max_length=11)

class ProductItem(models.Model):
    class Meta:
        verbose_name = 'Product Item'
        verbose_name_plural = 'Product Items'

    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.FloatField()
    img = models.TextField()
    category = models.ForeignKey(Category, null=True, on_delete=models.SET_NULL, blank=True)
    

class Feedback(models.Model):
    class Meta:
        verbose_name = 'Feedback'
        verbose_name_plural = 'Feedbacks'

    comment = models.TextField(default='')
    product = models.ForeignKey(ProductItem, null=True, on_delete=models.CASCADE, blank=True)












        

