var ArrayTasks = {

  concat: function (arr1, arr2) {
    return arr1.concat(arr2)
  },

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd)
		return arr
	}

}

module.exports = ArrayTasks;
