// Given an array of positive integers nums and an integer k, 
// find the length of the longest subarray whose sum is less than or equal to k.

let nums = [3, 1, 2, 7, 4, 2, 1, 1, 5];
let k = 8;

function longestSubarray(arr, target){
    let l = 0; curr = 0; ans = 0;
    for(let r = 0; r < arr.length; r++){
       curr += arr[r];
       while(curr > target){
        curr -= arr[l];
        l++;
       }
       ans = Math.max(ans, r -l + 1);
    }
    return ans;
}
console.log(longestSubarray(nums, k));

// You are given a binary string s (a string containing only "0" and "1"). 
// You may choose up to one "0" and flip it to a "1". 
// What is the length of the longest substring achievable that contains only "1"?

let binaryString = "11011001110010111111111";

function longestOnes(str){
    let l = 0, curr = 0, ans = 0;
    for(let r = 0; r < str.length; r++){
        if(str[r] == '0'){
            curr++;
        }
        while(curr > 1){
            if(str[l] == '0'){
                curr--;
            }
            l++
        }
        ans = Math.max(ans, r - l + 1);
    }
    return ans;
}
console.log(longestOnes(binaryString));

// Given an array of positive integers numbers and an integer t, return the number of subarrays 
// where the product of all the elements in the subarray is strictly less than t.
let numbers = [10, 5, 2, 6], t = 100;

function productLessThanT(arr, t){
    let l = 0, curr = 1, ans = 0;
    for(let r = 0; r < arr.length; r++){
        curr *= arr[r];
        while(curr >= t){
            curr /= arr[l];
            l++;
        }
        ans += r - l + 1;
    }
    return ans;
}
console.log(productLessThanT(numbers, t));

// Given an integer array numberArray and an integer y, find the sum of the subarray with the largest sum whose length is y.
let numberArray = [3, -1, 4, 12, -8, 5, 6]; y = 4;

function largestSumSubarray(arr, y){
    let curr = 0;
    for(let i = 0; i < y; i++){
        curr += arr[i];
    }
    let ans = curr;
    for(let j = y; j < arr.length; j++){
        curr += arr[j] - arr[j - y];
        ans = Math.max(ans, curr);
    }
    return ans;
}
console.log(largestSumSubarray(numberArray, y));

// Find a contiguous subarray whose length is equal to l that has the maximum average value and return this value. 
let numArray = [1,12,-5,-6,50,3], l = 4;

function getAverage(arr, l){
    let curr = 0;
    for(let i = 0; i < l; i++){
        curr += arr[i];
    }
    let ans = curr / l;
    for(let j = l; j < arr.length; j++){
        curr += arr[j] - arr[j - l];
        ans = Math.max(ans, curr / l);
    }
    return ans;
}
console.log(getAverage(numArray, l));

// Given a binary array nums and an integer int, return the maximum 
// number of consecutive 1's in the array if you can flip at most int 0's.

let binaryArray = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], int = 3;

function maxConsecutiveOnes(arr, int){
    let l = 0; curr = 0; ans = 0;
    for(let r = 0; r < arr.length; r++){
        if(arr[r] == 0){
            curr++;
        }
        while(curr > int){
            if(arr[l] == 0){
                curr--;
            }
            l++;
        }
        ans = Math.max(ans, r - l + 1);
    }
    return ans;
}
console.log(maxConsecutiveOnes(binaryArray, int));

