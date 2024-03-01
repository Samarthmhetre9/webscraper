from django.db import models
from django.contrib.auth.models import User # Import AbstractUser instead of User

class ProductSearch(models.Model):
    search_id = models.AutoField(primary_key = True)  # Foreign key to Product's p_id
    search_prompt =  models.CharField(max_length=255, null=True)
    search_count = models.IntegerField(default=0)
    searched_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Product with p_id {self.product_id} searched {self.search_count} times"
    
class Product(models.Model):
    p_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255, null=True)
    description = models.TextField(max_length=1000, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, null=True)
    old_price = models.DecimalField(max_digits=10, decimal_places=2, null=True )
    rating = models.FloatField(null=True)
    discount = models.DecimalField(max_digits=7, decimal_places=2, null=True)
    image_url = models.URLField(max_length = 1000)
    source_url = models.URLField(max_length = 1000)
    created_at = models.DateTimeField(auto_now_add=True)
    domain = models.CharField(max_length=255, null=True)
    search_id = models.ForeignKey( ProductSearch ,on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class PriceChange(models.Model):
    product_id = models.ForeignKey( Product ,on_delete=models.CASCADE)
    old_price = models.DecimalField(max_digits=10, decimal_places=2)
    new_price = models.DecimalField(max_digits=10, decimal_places=2)
    change_type = models.CharField(max_length=10)  # e.g., "increase", "decrease"
    change_timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Price of product with p_id {self.product_id} changed from {self.old_price} to {self.new_price}"


class Alert(models.Model):
    price_change_id = models.ForeignKey(Product,on_delete=models.CASCADE) # Foreign key to PriceChange's id
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    alert_type = models.CharField(max_length=10)  # e.g., "email", "SMS"
    alert_timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Alert for {self.user.username}: {self.alert_type} triggered by price change with id {self.price_change_id}"
    
class PriceTrack(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product_id = models.ForeignKey(Product , on_delete = models.CASCADE) # Foreign key to Product's p_id
    target_price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} tracking product with p_id {self.product_id} at {self.target_price}"
