from rest_framework_simplejwt.views import TokenRefreshView
from django.urls import path
from api import views
from . import views

urlpatterns = [
    path('token/',views.MyTokenObtainPairView.as_view(),name='token_obtain_pair'),
    path("token/refresh/",TokenRefreshView.as_view(),name='token_refresh'),
    path("register/",views.RegisterView.as_view(),name='auth_register'),
    path("dashboard/",views.dashboard,name='dashboard'),
    path('', views.getRoutes,name='get-routes'),
    path("my-messages/<user_id>",views.MyInbox.as_view(),name="my-messages"),
    path("get-messages/<sender_id>/<receiver_id>/",views.GetMessages.as_view(),name="get-messages"),
    path("send-messages/",views.SendMessages.as_view(),name="send-messages"),
    path("profile/<int:pk>/",views.ProfileDetail.as_view(),name="profile"),
    path("search/<username>/",views.SearchUser.as_view(),name="search"),

]