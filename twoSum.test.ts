import {describe, expect, test} from '@jest/globals';
import twoSum from './twoSum';


describe('twoSum', () => { 
   
    test('should return the pair of indexs that sums up to the target number ,[0,1],[3,4]', () => {
      let nums = [13,2,3,7,8];
      let target = 15;
        expect(twoSum(nums,target)).toEqual([[0,1],[3,4]]);
      });

      test('hould return the pair of indexs that sums up to the target number ,[1,2]',() => {
        let nums = [1,2,7,11,15];
        let target = 9;
        expect(twoSum(nums,target)).toEqual([[1,2]]);
      })
      test('should return one solution [0,1]',() => {
        let nums = [3,3];
        let target = 6;
        expect(twoSum(nums,target)).toEqual([[0,1]]);
      })
      test('should return empty array',() => {
        let nums = [3,3,1,1];
        let target = 5;
        expect(twoSum(nums,target)).toEqual([]);
      })
 })