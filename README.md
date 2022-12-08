# Two sum leetcode solution with o(n) time complexity package
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
## Install

```bash
npm install @adnen/twosum
```

## Test 

```bash
npm run test
```


## Usage

```typescript
// TYPESCRIPT FILE 
import twoSum from '@adnen/twosum'


const nums   : number[]   = [1,2,7,11,15];
const target : number     = 9;

const result : number[][] = twosum(nums,target)

console.log(result)
//  [[1,2]]

```

```js
// JAVASCRIPT FILE 
import twoSum from '@adnen/twosum'


const nums   = [1,2,7,11,15];
const target = 9;

const result = twosum(nums,target)

console.log(result)
//  [[1,2]]

```
