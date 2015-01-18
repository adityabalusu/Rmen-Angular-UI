'use strict';

describe('Service: serviceMatch', function () {

  // load the service's module
  beforeEach(module('geekvaletApp'));

  // instantiate service
  var serviceMatch;
  beforeEach(inject(function (_serviceMatch_) {
    serviceMatch = _serviceMatch_;
  }));

  it('should do something', function () {
    expect(!!serviceMatch).toBe(true);
  });

});
