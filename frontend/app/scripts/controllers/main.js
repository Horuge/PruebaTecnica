'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
    .controller('MainCtrl', ['$scope', 'servicesFactory', function($scope, servicesFactory) {

        servicesFactory.getClientes().then(function(res) {
            $scope.selectCliente = res;
        });

        $scope.etiquetas = [
            'Enero',
            'Febrero',
            'Marzo',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Septiembre',
            'Octubre',
            'Noviembre',
            'Diciembre'
        ];
        $scope.series = ['Potencia Consumida'];


        $scope.checked = true;
        $scope.filecheck = true;
        $scope.editarBorrar = true;
        $scope.grafData = undefined;
        $scope.guardarBtn = true;
        $scope.cancelarBtn = true;

        var initVar = function() {
            $scope.checked = true;
            $scope.filecheck = true;
            $scope.editarBorrar = true;
            $scope.grafData = undefined;
            $scope.guardarBtn = true;
            $scope.cancelarBtn = true;
        }

        $scope.clienteSelect = function() {
            if ($scope.client !== '') {
                servicesFactory.getCliente($scope.client).then(function(res) {
                    $scope.cliente = res;
                    $scope.filecheck = false;
                    $scope.editarBorrar = false;
                });
                servicesFactory.getConsumoCliente($scope.client).then(function(res) {
                    var data = res;
                    parseDataGraph(data);
                });
            } else {
                $scope.filecheck = true;
                $scope.checked = true;
                $scope.cliente = undefined;
                $scope.editarBorrar = true;
                $scope.grafData = undefined;
                $scope.cancelarBtn = true;
            }
        }


        var parseDataGraph = function(data) {
            var dataSort = data.sort(function(a, b) {
                if (a.mes > b.mes) {
                    return 1;
                }
                if (a.mes < b.mes) {
                    return -1;
                }
                return 0;
            });
            $scope.grafData = [];
            const len = 12;
            for (var i = 0; i < len; i++) {
                $scope.grafData.push(dataSort[i].consumo);
            }
        };

        $scope.nuevo = function() {
            $scope.checked = false;
            $scope.cancelarBtn = false;
            $scope.guardarBtn = false;
            $scope.editarBorrar = true;
            $scope.cliente = undefined;
            $scope.filecheck = true;
            $scope.client = '';
        }

        $scope.cancelar = function() {
            $scope.checked = true;
            $scope.filecheck = true;
            $scope.editarBorrar = $scope.client == '';
            $scope.grafData = undefined;
            $scope.guardarBtn = true;
            $scope.cancelarBtn = true;
        }

        $scope.guardar = function() {
            if ($scope.client == '') {
                servicesFactory.nuevoCliente($scope.cliente).then(function(res) {
                    initVar();
                    servicesFactory.getClientes().then(function(res) {
                        $scope.selectCliente = res;
                    });
                });
            } else {
                servicesFactory.updateCliente($scope.cliente).then(function(res) {
                    console.log(res);
                });
            }
        }

        $scope.borrar = function() {
            servicesFactory.deleteCliente($scope.client).then(function(res) {
                initVar();
                servicesFactory.getClientes().then(function(res) {
                    $scope.selectCliente = res;
                });
            });
        }

        $scope.editar = function() {
            $scope.checked = false;
            $scope.cancelarBtn = false;
            $scope.guardarBtn = false;
            $scope.editarBorrar = true;
            $scope.filecheck = true;
        }

        $scope.cargar = function() {
            var f = document.getElementById('file').files[0],
                r = new FileReader();

            r.onloadend = function(e) {
                var data = e.target.result;
                //send your binary data via $http or $resource or do anything else with it
            }

            r.readAsBinaryString(f);
        }


    }]);