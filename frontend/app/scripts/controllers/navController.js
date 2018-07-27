'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:navController
 * @description
 * # navController
 * Controller of the frontendApp
 */
angular.module('frontendApp')
    .controller('navController', ['$scope', '$location', function($scope, $location) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.isActive = function(dest) {
            return dest === $location.path();
        }


    }]);