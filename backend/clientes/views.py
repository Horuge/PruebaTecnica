# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework import generics
from clientes.models import Cliente, Consumo
from clientes.serializers import ClienteSerializers, ConsumoSerializers, ConsumoMesSerializers, NombresClientesSerializers
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from rest_framework.views import APIView
import csv
# Create your views here.


class ClienteList(generics.ListCreateAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializers


class ClienteDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializers


class ClienteCreate(generics.CreateAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializers


class ClienteUpdate(generics.UpdateAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializers


class ClienteDelete(generics.DestroyAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializers

class ConsumoList(generics.ListCreateAPIView):
    queryset = Consumo.objects.all()
    serializer_class = ConsumoSerializers


class ConsumoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Consumo.objects.all()
    serializer_class = ConsumoSerializers


class ConsumoByCliente(generics.ListAPIView):
    serializer_class = ConsumoMesSerializers

    def get_queryset(self):
        clienteId = self.kwargs['cliente']
        year = self.kwargs['year']
        return Consumo.objects.filter(cliente=clienteId, anno=year)


class NombresClientes(generics.ListAPIView):
    queryset = Cliente.objects.all()
    serializer_class = NombresClientesSerializers


class FileUpload(APIView):
    parser_classes = (FileUploadParser,)

    def put(self, request, filename, format=None):
        file_obj = request.data[filename]
        id = request.data[id]
        csv_object = csv.reader(file_obj)
        #TODO Asignar valores del csv a la base datos con el id del cliente.
        return Response(status=204)
