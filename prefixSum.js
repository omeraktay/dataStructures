// Given an integer array nums, an array queries where queries[i] = [x, y] and 
// an integer limit, return a boolean array that represents the answer to each query. 
// A query is true if the sum of the subarray from x to y is less than limit, or false otherwise.

let numberOfArray = [1, 6, 3, 2, 7, 2], queries = [[1, 3], [2, 5], [2, 4]], limit = 13;
let total =         [1, 7, 10,12,19,21]

function answerQueries(arr, q, l){
    let prefix = [arr[0]];
    for(let i = 1; i < arr.length; i++){
        prefix.push(arr[i] + prefix[prefix.length - 1]);
    }
    let ans = [];
    for(let [x, y] of q){
        let curr = prefix[y] - prefix[x] + arr[x];
        ans.push(curr < l);
    }
    return ans;
}
console.log(answerQueries(numberOfArray, queries, limit));

// Given an integer array nums, find the number of ways to split the array into two parts 
// so that the first section has a sum greater than or equal to the sum of the second section. 
// The second section should have at least one number.

let numbers = [10, 4, -8, 7];

function waysToSplit(arr){
    let prefix = [arr[0]];
    for(let i = 1; i < arr.length; i++){
        prefix.push(arr[i] + prefix[prefix.length - 1]);
    }
    let ans = 0;
    for(let i = 0; i < arr.length - 1; i++){
        let l = prefix[i];
        let r = prefix[prefix.length - 1] - prefix[i];
        if(l >= r){
            ans++
        }
    }
    return ans;
}

console.log(waysToSplit(numbers));

// Second method

function ways2Split(arr){
    let ans = 0, total = 0, l = 0;
    for(let num of arr){
        total += num;
    }
    for(let i = 0; i < arr.length - 1; i++){
        l += arr[i];
        r = total - l;
        if(l >= r){
            ans++;
        }
    }
    return ans;
}
console.log(ways2Split(numbers));

//Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

let nums = [3,1,2,10,1];
function runningSum(nums){
    let prefix = [nums[0]];
    for(let i = 1; i < nums.length ; i++){
        prefix.push(nums[i] + prefix[prefix.length - 1]);
    }
    return prefix;
}
console.log(runningSum(nums));

// Return the minimum positive value of startValue such that the step by step sum is never less than 1.

let input = [-3,2,-3,4,2];

function minPositiveValue(arr){
    let prefix = [arr[0]];
    for(let i = 1; i < arr.length; i++){
        prefix.push(arr[i] + prefix[prefix.length - 1]);
    }
    if(Math.min(...prefix) > 0){
        return 1;
    }else{
        return (Math.abs(Math.min(...prefix)) + 1);
    }
}
console.log(minPositiveValue(input));

// Build and return an array avgs of length n where avgs[i] is the k-radius average for the subarray centered at index i.

let arrayOfNumbers = [7,4,3,9,1,8,5,2,6,2,5,7,1,8,2];
function getAverage(arr, k){
    prefix = [arr[0]];
    for(let i = 1; i < arr.length; i++){
        prefix.push(arr[i] + prefix[prefix.length - 1]);
    }
    let avg = [];
    for(let i = 0; i < arr.length; i++){
        if(i - k < 0 || i + k >= arr.length){
            avg.push(-1);
        }else{
            let l = i - k; r = i + k;
            let sum = prefix[r] - prefix[l] + arr[l];
            let average = Math.trunc(sum / (2 * k + 1));
            avg.push(average);
        }
    }
    return avg;
}
console.log(getAverage(arrayOfNumbers, 4));