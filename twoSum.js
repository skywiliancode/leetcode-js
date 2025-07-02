/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {

  if (nums.length < 2 || nums.length > 10000) {
    return [];
  }


  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }

      if (nums[i] < -1000000000 || nums[i] > 1000000000) {
        return [];
      }

      if (target < -1000000000 || target > 1000000000) {
        return [];
      }
    }
  }
}

console.log(twoSum([3, 2, 4], 6))