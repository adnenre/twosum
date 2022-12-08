/**
 * Given an array of integers nums and an integer target, 
 * return indices of the two numbers such that they add up to target.
 */

interface memoType {
  [key:number] : number
}

const twoSum = (nums:number[], target:number):number[][] =>  {
    const indexs : number[][]= [];
    const memo :memoType = {};
    for (let i = 0; i < nums.length; i++) {
       let current = nums[i]
       let complement = target - nums[i];
       if(complement in memo){
        indexs.push([memo[complement],i])
       }
        memo[current] = i;
    }

  return indexs;
}

export default twoSum;