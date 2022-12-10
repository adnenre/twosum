"use strict";
/**
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 */
exports.__esModule = true;
var twoSum = function (nums, target) {
    var indexs = [];
    var memo = {};
    for (var i = 0; i < nums.length; i++) {
        var current = nums[i];
        var complement = target - nums[i];
        if (complement in memo) {
            indexs.push([memo[complement], i]);
        }
        memo[current] = i;
    }
    return indexs;
};
exports["default"] = twoSum;
