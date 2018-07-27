from rest_framework import serializers
from clientes.models import Cliente, Consumo


class ClienteSerializers(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ('id', 'nombre', 'apellidos', 'potContratada', 'cup')


class NombresClientesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ('id', 'nombre', 'apellidos')


class ConsumoSerializers(serializers.ModelSerializer):
    class Meta:
        model = Consumo
        fields = ('id', 'cliente', 'consumo', 'mes', 'anno')


class ConsumoMesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Consumo
        fields = ('consumo', 'mes')
