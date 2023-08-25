from rest_framework import pagination


class CustomProjectsPagination(pagination.PageNumberPagination):
    page_size = 9
    page_size_query_param = 'page_size'
    page_query_param = 'p'