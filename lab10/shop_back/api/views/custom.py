from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView

from api.serializers import ProductSerializer, CategorySerializer
from api.models import Product, Category

class CategoryProductsAPIView(APIView):
    def get(self, request, category_id):
        try:
            category = Category.objects.get(pk=category_id)
        except Category.DoesNotExist as e:
            return Response({'error': str(e)},
                status=status.HTTP_404_NOT_FOUND)
        
        products = category.products.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)