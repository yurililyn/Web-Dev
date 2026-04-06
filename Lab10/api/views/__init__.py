LEVEL = 5

from .generics import CategoryListAPIView, CategoryDetailAPIView, CategoryProductsAPIView

if LEVEL == 5:  
    from .generics import ProductListAPIView, ProductDetailAPIView
elif LEVEL == 4:
    from .mixins import ProductListAPIView, ProductDetailAPIView
elif LEVEL == 3:
    from .cbv import ProductListAPIView, ProductDetailAPIView
elif LEVEL == 2:
    from .fbv import products_list, product_detail