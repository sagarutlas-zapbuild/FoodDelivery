from rest_framework.serializers import ModelSerializer

from .models import Restaurant, ItemCategory, Item, Cart, CartItem, Coupon, UserCoupon, Order, RestaurantRating, ItemRating

class RestaurantSerializer(ModelSerializer):
    class Meta:
        model = Restaurant
        fields = '__all__'

class ItemCategorySerializer(ModelSerializer):
    class Meta:
        model = ItemCategory
        fields = '__all__'

class ItemSerializer(ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'

class CartSerializer(ModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'

class CartItemSerializer(ModelSerializer):
    class Meta:
        model = CartItem
        fields = '__all__'

class CouponSerializer(ModelSerializer):
    class Meta:
        model = Coupon
        fields = '__all__'
        
class UserCouponSerializer(ModelSerializer):
    class Meta:
        model = UserCoupon
        fields = '__all__'

class OrderSerializer(ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'

class RestaurantRatingSerializer(ModelSerializer):
    class Meta:
        model = RestaurantRating
        fields = '__all__'

class ItemRatingSerializer(ModelSerializer):
    class Meta:
        model = ItemRating
        fields = '__all__'