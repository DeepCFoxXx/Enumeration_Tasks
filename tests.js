var assert = require('assert')
var arrayTasks = require('./array_tasks.js')

describe('Array tasks', function () {

  it('should concatenate two arrays, returning a new array', function () {
    var arr1 = [1, 2, 3]
    var arr2 = [4, 5, 6]
    var expectation = [1, 2, 3, 4, 5, 6]
    assert.deepStrictEqual(arrayTasks.concat(arr1, arr2), expectation)
  });

});
