from django.contrib import admin

from .models import Restaurant, ItemCategory, Item, Cart, CartItem, Coupon, UserCoupon, Order, RestaurantRating, ItemRating

# Register your models here.

admin.site.register(Restaurant)
admin.site.register(ItemCategory)
admin.site.register(Item)
admin.site.register(Cart)
admin.site.register(CartItem)
admin.site.register(Coupon)
admin.site.register(UserCoupon)
admin.site.register(Order)
admin.site.register(RestaurantRating)
admin.site.register(ItemRating)