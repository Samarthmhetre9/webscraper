from rest_framework import serializers
from .models import Product, PriceTrack, PriceChange, Alert, ProductSearch

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class PriceTrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = PriceTrack
        fields = '__all__'

class PriceChangeSerializer(serializers.ModelSerializer):
    class Meta:
        model = PriceChange
        fields = '__all__'

class AlertSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alert
        fields = '__all__'

class ProductSearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductSearch
        fields = '__all__'
