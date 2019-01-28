'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	class BinarySearchTree {
		constructor(val) {
			this.value = val
			this.left = null
			this.right = null
		}

		insert(val) {
			let direction
			if (val < this.value) {
				direction = 'left'
			} else if (val > this.value) {
					direction = 'right'
			}

			if (this[direction] === null) {
				this[direction] = new BinarySearchTree(val)
			} else {
				this[direction].insert(val)
			}
		}
		
		contains(val) {
			if (val === this.value) return true;
			const direction = val < this.value ? 'left' : 'right';
			return this[direction] ? this[direction].contains(val) : false;
			}

		}
		console.log('Testing: ', array)

		const Result = new BinarySearchTree(array.pop())


		array.forEach(num => {
			console.log(Result)
			if (num !== undefined) {
				return Result.insert(num)
			}
		})

		return Result.contains(target)
	}



/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch