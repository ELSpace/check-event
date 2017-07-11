const assert = require('assert');
const app = require('../../src/app');

describe('\'forms\' service', () => {
  it('registered the service', () => {
    const service = app.service('forms');

    assert.ok(service, 'Registered the service');
  });
});
