'use strict';

/**
 * @ngdoc service
 * @name frontendApp.servicesFactory
 * @description
 * # servicesFactory
 * Factory in the frontendApp.
 */
angular.module('frontendApp')
    .factory('servicesFactory', ['$http', function($http) {

        const BASE_URL = 'http://localhost:8000'

        return {
            getClientes: function() {
                return $http({
                    method: 'GET',
                    url: BASE_URL + '/clientes/'
                }).then(function(response) {
                    return response.data;
                }, function(error) {
                    console.log(error);
                });
            },

            nuevoCliente: function(data) {
                /*return $http({
                    method: 'POST',
                    url: BASE_URL + '/cliente/nuevo/',
                    data: data*/
                return $http.post(BASE_URL + '/cliente/nuevo/', data)
                    //  })
                    .then(function(response) {
                        return response;
                    }, function(error) {
                        console.log(error);
                    });
            },

            deleteCliente: function(id) {
                return $http({
                    method: 'DELETE',
                    url: BASE_URL + '/cliente/delete/' + id
                }).then(function(response) {
                    return response;
                }, function(error) {
                    console.log(error);
                });
            },

            updateCliente: function(data) {
                return $http({
                    method: 'PUT',
                    url: BASE_URL + '/cliente/update/' + data.id,
                    data: data
                }).then(function(response) {
                    return response;
                }, function(error) {
                    console.log(error);
                });
            },

            getCliente: function(id) {
                return $http({
                    method: 'GET',
                    url: BASE_URL + '/cliente/' + id
                }).then(function(response) {
                    return response.data;
                }, function(error) {
                    console.log(error);
                });
            },

            getNombresClientes: function() {
                return $http.get(BASE_URL + '/nombres/').then(function(response) {
                    return response.data;
                }, function(error) {
                    console.log(error);
                });
            },

            getConsumoCliente: function(id) {
                return $http({
                    method: 'GET',
                    url: BASE_URL + '/consumoByCliente/' + id + '/2017'
                }).then(function(response) {
                    return response.data;
                }, function(error) {
                    console.log(error);
                });
            }

        };
    }]);