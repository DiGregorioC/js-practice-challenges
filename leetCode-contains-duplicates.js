// Given an array of integers, find if the array contains any duplicates.
//
// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

let nums = [1,2,3,1]
var containsDuplicate = function(nums) {
    for(let i = 0; i <= nums.length; i++) {
        for(let j = i; j <= nums.length; j++) {
            if(i != j && nums[i] === nums[j]) {
                return true
            }
        }
    }
    return false
};
