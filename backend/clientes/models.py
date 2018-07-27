# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from adaptor.model import CsvModel

# Create your models here.


class Cliente (models.Model):
    nombre = models.CharField(max_length=50, blank=False)
    apellidos = models.CharField(max_length=100, blank=True, default='')
    potContratada = models.IntegerField(blank=False, default=3500)
    cup = models.CharField(max_length=22, blank=False)

    class Meta:
        ordering = ('nombre',)


class Consumo (models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    consumo = models.IntegerField(blank=False, default=100)
    mes = models.IntegerField(blank=False)
    anno = models.IntegerField(blank=False)

    class Meta:
        ordering = ('mes', 'anno',)

'''
Modelo para el CSV coincide con Consumo
'''
class MyCSvModel(CsvModel):
    consumo = models.IntegerField(blank=False, default=100)
    mes = models.IntegerField(blank=False)
    anno = models.IntegerField(blank=False)

    class Meta:
        delimiter = ";"
        dbModel = Consumo
