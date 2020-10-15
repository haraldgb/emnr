from django.urls import path
from django.urls import re_path
from . import views


urlpatterns = [
    path("", views.post_review),
    path("get/", views.get_reviews)
]