const assert = require('assert');
const flatten = require('../flatten');

suite('flatten', function () {
	test('with array returns array', function () {
		assert.deepStrictEqual(flatten([1, 'two', 3, false]), [1, 'two', 3, false]);
	});

	test('with empty array returns array', function () {
		assert.deepStrictEqual(flatten([]), []);
	});

	test('with nested array returns array', function () {
		assert.deepStrictEqual(flatten([[1, 2, 3]]), [1, 2, 3]);
	});

	test('with nested empty array returns array', function () {
		assert.deepStrictEqual(flatten([[]]), []);
	});

	test('with object returns object', function () {
		assert.deepStrictEqual(flatten({a: 1}), {a: 1});
	});
});