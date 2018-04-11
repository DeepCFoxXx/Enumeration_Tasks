var assert = require('assert')
var arrayTasks = require('./array_tasks.js')

describe('Array tasks', function () {

  it('should concatenate two arrays, returning a new array', function () {
    var arr1 = [1, 2, 3]
    var arr2 = [4, 5, 6]
    var expectation = [1, 2, 3, 4, 5, 6]
    assert.deepStrictEqual(arrayTasks.concat(arr1, arr2), expectation)
  });

  it('should insert an item in an array at any index position', function () {
    var arr = [1, 2, 4]
    assert.deepStrictEqual(arrayTasks.insertAt(arr, 3, 2), [1, 2, 3, 4])
  });

  it('should square all values in an array, returning a new array', function () {
    var arr = [1, 2, 3, 4, 5]
    assert.deepStrictEqual(arrayTasks.square(arr), [1, 4, 9, 16, 25])
  });

  it('should calculate the sum of all values in an array', function () {
    var arr = [1, 2, 3, 4, 5]
    assert.strictEqual(arrayTasks.sum(arr), 15)
  });

  it('should find duplicate values in an array, returning a new array of the duplicates', function () {
    var arr = [1, 2, 3, 4, 4, 5, 5, 5]
    assert.deepStrictEqual(arrayTasks.findDuplicates(arr), [4, 5])
  });

});
