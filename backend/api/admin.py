from django.contrib import admin
from .models import Product, PriceTrack, PriceChange, Alert, ProductSearch

admin.site.register(Product)
admin.site.register(PriceTrack)
admin.site.register(PriceChange)
admin.site.register(Alert)
admin.site.register(ProductSearch)
