from django.urls import path
from .views import  ProductListAPIView,ProductByIdAPIView, ProductCreateAPIView, ProductUpdateAPIView, SearchAPIView , SearchProductsAPIView , SearchProductsByIdAPIView

urlpatterns = [
    path('products/', ProductListAPIView.as_view(), name='product-list'),
    path('products/<int:id>/', ProductByIdAPIView.as_view(), name='product-detail'),
    path('products/add/', ProductCreateAPIView.as_view(), name='product-create'),
    path('products/update/<int:id>/', ProductUpdateAPIView.as_view(), name='product-update'),
    path('products/search', SearchAPIView.as_view(), name='Search-product'),
    path('Searches/', SearchProductsAPIView.as_view(), name='Search-table-all'),
    path('Searches/<int:id>', SearchProductsByIdAPIView.as_view(), name='Search-table-by-id'),
]
