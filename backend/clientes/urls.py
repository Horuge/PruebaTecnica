from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from clientes import views

urlpatterns = [
    url(r'^clientes/$', views.ClienteList.as_view()),
    url(r'^cliente/(?P<pk>[0-9]+)/$', views.ClienteDetail.as_view()),
    url(r'^cliente/nuevo/$', views.ClienteCreate.as_view()),
    url(r'^cliente/update/(?P<pk>[0-9]+)/$', views.ClienteUpdate.as_view()),
    url(r'^cliente/delete/(?P<pk>[0-9]+)/$', views.ClienteDelete.as_view()),
    url(r'^consumos/$', views.ConsumoList.as_view()),
    url(r'^consumo/(?P<pk>[0-9]+)/$', views.ConsumoDetail.as_view()),
    url(r'^consumoByCliente/(?P<cliente>[0-9]+)/(?P<year>[0-9]+)$', views.ConsumoByCliente.as_view()),
    url(r'^nombres/$', views.NombresClientes.as_view()),
    url(r'^upload/(?P<filename>[^/]+)$', views.FileUpload.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
