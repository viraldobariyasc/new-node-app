const test = require('node:test');
const assert = require('node:assert/strict');
const app = require('../app');
const pkg = require('../package.json');

test('package metadata is present', () => {
  assert.equal(pkg.name, 'ecs-demo');
  assert.equal(typeof pkg.version, 'string');
});

test('express app exposes a route handler', () => {
  assert.equal(typeof app.get, 'function');
});
