from django.db import models

from django.conf import settings

import uuid
# Create your models here.


class Restaurant(models.Model):
    """
    Restaurant and it's details
    """
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, limit_choices_to={'is_staff': True})
    name = models.CharField(max_length=250)
    address = models.TextField()
    city = models.CharField(max_length=105)
    state = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    phone = models.BigIntegerField()
    registered_at = models.DateTimeField(auto_now_add=True)
    accepting_orders = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class ItemCategory(models.Model):
    """
    Category of items for classification in the menu
    """
    name = models.CharField(max_length=50)
    restaurant = models.ForeignKey(
        Restaurant, on_delete=models.CASCADE, related_name="categories", related_query_name="category")

    def __str__(self):
        return self.name


class Item(models.Model):
    """
    Food items and their description
    """
    suitable_for_choices = [('jain', 'Jains'),
                            ('vegan', 'Vegans'),
                            ('veg', 'Vegetarians'),
                            ('egg', 'Egg Eaters'),
                            ('non-veg', 'Non-Vegetarians')]
    restaurant = models.ForeignKey(
        Restaurant, on_delete=models.CASCADE, related_name="items", related_query_name="item")
    name = models.CharField(max_length=250)
    category = models.ForeignKey(
        ItemCategory, on_delete=models.DO_NOTHING)
    suitable_for = models.CharField(max_length=8, choices=suitable_for_choices)
    price = models.FloatField()
    in_stock = models.BooleanField(default=True)

    def __str__(self):
        return self.name


payment_choices = [
    ('cash', 'Cash'),
    ('online', 'Online')
]


class Cart(models.Model):
    """
    Carts made by users. It also holds their total amount.
    """
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
    """ items = models.ManyToManyField(to=Item, through='CartItem') """
    total = models.FloatField()


class CartItem(models.Model):
    """
    Intermediate class between Cart and Item which holds subtotal and quantity of product for the cart
    """
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE,
                             related_name="cart_items", related_query_name="cart_item")
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    sub_total = models.FloatField()

class Coupon(models.Model):
    """
    Discount coupons for users
    """
    discount_type_choices = [('cash','Cash'),('%','%')]
    code = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False)
    discount = models.FloatField()
    discount_type = models.CharField(max_length = 4, choices = discount_type_choices )
    min_order = models.FloatField(default=0)
    max_discount = models.FloatField(blank=True, null=True)
    expiration_date = models.DateField()

    def __str__(self):
        return self.code

class UserCoupon(models.Model):
    """
    Details of coupon usage i.e., which user can use which coupon and how many times
    """
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,
                             related_name='coupons', related_query_name='coupon')
    usage_left = models.IntegerField(default=1)
    coupon = models.ForeignKey(Coupon, on_delete=models.CASCADE)

class Order(models.Model):
    """
    Orders made by user
    """
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    coupon = models.ForeignKey(Coupon, on_delete=models.DO_NOTHING)
    delivery_address = models.TextField()
    city = models.CharField(max_length=105)
    state = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    payment_mode = models.CharField(max_length=20, choices=payment_choices)


rating_choices = [(1, 1),
                  (2, 2),
                  (3, 3),
                  (4, 4),
                  (5, 5), ]


class RestaurantRating(models.Model):
    """
    Ratings for restaurant
    """
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
    restaurant = models.ForeignKey(
        Restaurant, on_delete=models.CASCADE, related_name="ratings", related_query_name="rating")
    rating = models.IntegerField(choices=rating_choices)


class ItemRating(models.Model):
    """
    Ratings for Item
    """
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
    item = models.ForeignKey(
        Item, on_delete=models.CASCADE, related_name="ratings", related_query_name="rating")
    rating = models.IntegerField(choices=rating_choices)



