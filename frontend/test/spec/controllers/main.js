'use strict';

describe('Controller: MainCtrl', function() {

    // load the controller's module
    beforeEach(angular.module('frontendApp'));

    var MainCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
                // place here mocked dependencies
        });
    }));

    it('Valores iniciales', function() {
        expect(scope.etiquetas.length).toBe(12);
    });
});