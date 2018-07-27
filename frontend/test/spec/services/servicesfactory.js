'use strict';

describe('Service: servicesFactory', function () {

  // load the service's module
  beforeEach(module('frontendApp'));

  // instantiate service
  var servicesFactory;
  beforeEach(inject(function (_servicesFactory_) {
    servicesFactory = _servicesFactory_;
  }));

  it('should do something', function () {
    expect(!!servicesFactory).toBe(true);
  });

});
