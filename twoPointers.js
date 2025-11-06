// Check if it is a palindrome
let string = 'racecar';

function isPalindrome(str){
    let l = 0;
    let r = str.length - 1;
    while(l < r){
        if(str[l] != str[r]){
            return false;
        }
        l++;
        r--;
    }
    return true;
}
console.log(isPalindrome(string));

//  Given a sorted array of unique integers and a target integer, 
// return true if there exists a pair of numbers that sum to target.

let numbers = [1, 3, 4, 6, 8, 11, 15]; // target: 10;

function checkTarget(arr, target){
    let l = 0;
    let r = arr.length -1;
    while(l < r){
        let curr =  arr[l] + arr[r];
        if(curr == target){
           return `${l}, ${r}`;
        }
        if(curr > target){
            r--;
        }else{
            l++
        }
    }
    return false;
}
console.log(checkTarget(numbers, 14));

// Given two sorted integer arrays array1 and array2, return a new 
// array that combines both of them and is also sorted.

let array1 = [1, 4, 7, 10, 13];
const array2 = [2, 3, 5, 8, 12, 15];

function combine(arr1, arr2){
    let i = 0, j = 0;
    let ans = [];
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            ans.push(arr1[i]);
            i++;
        }
        else{
            ans.push(arr2[j]);
            j++
        }
    }
    while(i < arr1.length){
        ans.push(arr1[i]);
        i++;
    }
    while(j< arr2.length){
        ans.push(arr2[j]);
        j++;
    }
    return ans;
}
console.log(combine(array1, array2));

// Given two array nums1 and nums2, return true if nums2 is a subsequence of nums1, or false otherwise.

const nums1 = [1, 3, 5, 7, 9];
const nums2 = [3, 7, 9];

function isSubsequence(arr1, arr2){
    let i = 0, j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] == arr2[j]){
            j++;
        }
        else{
            i++;
        }
    }
    return j == arr2.length;
}
console.log(isSubsequence(nums1, nums2));

// Write a function that reverses a string. The input string is given as an array of characters arrayString.

let  arrayString = ["o", "h","e","l","l","o"];

function reverseString(str){
    let l = 0;
    let r = str.length - 1;
    while(l < r){
        [str[l], str[r]] = [str[r], str[l]];
        l++;
        r--;
    }
    return str;
}
console.log(reverseString(arrayString));

//Given an integer array nums sorted in non-decreasing order, 
// return an array of the squares of each number sorted in non-decreasing order.

const nums = [-7, -3, 0, 2, 5];

function sortedSquares(arr){
    let l = 0;
    let r = arr.length - 1;
    let ans = [];
    while(l <= r){
        if(Math.abs(arr[l]) >= Math.abs(arr[r])){
            ans.unshift(arr[l] * arr[l]);
            l++;
        }else{
            ans.unshift(arr[r] * arr[r]);
            r--;
        }
    }
    return ans;
}
console.log(sortedSquares(nums));