import asyncio
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework import generics, status
from rest_framework.response import Response

from .scraper.amazon_scrapper import scrape_amazon
from .scraper.flipcart_scrapper import scrape_flipkart
from .scraper.parse_products import parse_products
from .models import Product , ProductSearch
from .serializers import ProductSerializer , ProductSearchSerializer
from rest_framework.views import APIView

class ProductListAPIView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductByIdAPIView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'id'



class ProductCreateAPIView(generics.CreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class ProductUpdateAPIView(generics.UpdateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'id'

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)

class SearchAPIView(APIView):
    def post(self, request, *args, **kwargs):
        data = request.data 
        ama_data = asyncio.run(scrape_amazon(data['searchData']))
        flip_data = asyncio.run(scrape_flipkart(data['searchData']))
        final_data = parse_products(ama_data, flip_data)

        search_data = {"search_prompt": data['searchData'], "search_count": len(final_data)}
        search_serializer = ProductSearchSerializer(data=search_data)
        if search_serializer.is_valid():
            search_instance = search_serializer.save()
            for item in final_data:
                item['search_id'] = search_instance.search_id
            print("Search saved")
        else:
            print("Search serializer is not valid:", search_serializer.errors)
        product_serializer = ProductSerializer(data=final_data, many=True)
        if product_serializer.is_valid():
            product_instance  = product_serializer.save()
            index = 0
            for item in final_data:
                item['p_id'] = product_instance[index].p_id
                index +=1
            print("Data saved in product")
        else:
            print("product serializer is not valid:", product_serializer.errors)
        print("response delivered")
        return JsonResponse(final_data, safe=False)
    
class SearchProductsAPIView(generics.ListAPIView):
    queryset = ProductSearch.objects.all()
    serializer_class = ProductSearchSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
    

class SearchProductsByIdAPIView(generics.RetrieveAPIView):
    queryset = ProductSearch.objects.all()
    serializer_class = ProductSearchSerializer
    lookup_url_kwarg = 'id'

       