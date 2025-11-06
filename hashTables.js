// Given an array of integers nums and an integer target, return indices of two numbers 
// such that they add up to target. You cannot use the same index twice.

let numbers = [5, 2, 10, 3, -9, 6, -12, 34, -77, 2, 4, -56, 77,  -43, -6, 9, 1, 15];
let target = 17;

function checkTarget(arr, target){
    let map = new Map();
    for(let i = 0; i < arr.length; i++){
        let num = arr[i];
        let comp = target - num;
        if(map.has(comp)){
            return [map.get(comp), i];
        }
        map.set(num, i);
    }
    return [-1, -1]
}
console.log(checkTarget(numbers, target));


// Given a string s, return the first character to appear twice. 
// It is guaranteed that the input will have a duplicate character.

let string = 'abcdea';

var repeatedCharacter = function(s) {
    let seen = new Map();
    for (const c of s) {
        if (seen.has(c)) {
            return c;
        }
        
        seen.set(c);
    }
    
    return " ";
};
console.log(repeatedCharacter(string));

// Given an integer array nums, find all the numbers x in nums that satisfy the following:
//  x + 1 is not in nums, and x - 1 is not in nums.
// If a valid number x appears multiple times, you only need to include it in the answer once.


let findNumbers = nums => {
    let ans = [];
    let numsSet = new Set(nums);

    for (const num of numsSet) {
        if (!numsSet.has(num + 1) && !numsSet.has(num - 1)) {
            ans.push(num);
        }
    }

    return ans;
}
console.log(findNumbers(numbers));

// A pangram is a sentence where every letter of the English alphabet appears at least once.
// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

let sentence = "thequickbrownfoxjumpsoverthelazydog"

function isPangram(str){
    let unique = new Set(str);
    return unique.size === 26;
}
console.log(isPangram(sentence));

// Given an array nums containing n distinct numbers in the range [0, n], 
// return the only number in the range that is missing from the array.

let nums = [9,6,4,2,3,5,7,0,1]; // Expected output: 8

function missingNumber(arr){
    let numberSet = new Set(arr);
    for(let i = 0; i <= arr.length; i++){
        if(!numberSet.has(i)){
            return i
        }
    }
}
console.log(missingNumber(nums));


// Given an integer array arr, count how many elements x there are, such that 
// x + 1 is also in arr. If there are duplicates in arr, count them separately.

let arr = [1,3,5,6,6,6,6,6,7,9];

function findThem(arr){
    let numMap = new Set(arr);
    // let arrSet = [...new Set(arr)];
    let ans = 0;
    for(let i = 0; i < arr.length; i++){
        let num = arr[i];
        if(numMap.has(num + 1)){
            ans++;
        }
    }
    return ans;
}
console.log(findThem(arr));

// You are given a string s and an integer k. Find the length of the 
// longest substring that contains at most k distinct characters.

let longString = 'eceeeeeeccccccaaaaaacccccceee';

function mostKDis(str, k){
    let map = new Map();
    let l = 0; curr = 0; ans = 0;
    for(let r = 0; r < str.length; r++){
        map.set(str[r], (map.get(str[r]) || 0) + 1);
        while(map.size > k){
            map.set(str[l], map.get(str[l]) - 1);
            if(map.get(str[l]) == 0){
                map.delete(str[l]);
            }
            l++;
        }
        ans = Math.max(ans, r - l + 1);
    }
    return ans;
}
console.log(mostKDis(longString, 2));

// Given a 2D array nums that contains n arrays of distinct integers, 
// return a sorted array containing all the numbers that appear in all n arrays.

let numSubarray = [[3,1,2,4,5,0],[1,2,0,3,4],[3,4,0,5,6]];

function findMutualNumbers(arr){
    let map = new Map();
    let ans = [];
    for(let subArr of arr){
        for(let num of subArr){
            map.set(num, (map.get(num) || 0) + 1);
        }
    }
    for(let [key, val] of map){
        if(val == arr.length){
            ans.push(key);
        }
    }
    return ans.sort((a,b) => a - b);
}
console.log(findMutualNumbers(numSubarray));

// Given a string s, determine if all characters have the same frequency

let s = "abadcbcd";

function frequency(str){
    let map = new Map();
    for(let char of str){
        map.set(char, (map.get(char) || 0 ) + 1);
    }
    let set = new Set();
    for(let val of map.values()){
        set.add(val);
    }
    return set.size == 1;
}
console.log(frequency(s));



// Given an integer array nums and an integer k, find the number of subarrays whose sum is equal to k.

let numsArray = [3,1, 2, -3, 2, 1,2,1], k = 3. 

function findTarget(arr, k){
    let map = new Map();
    map.set(0, 1);
    let curr = 0, ans = 0;
    for(let num of arr){
        curr += num;
        ans += (map.get(curr - k) || 0);
        map.set(curr, (map.get(curr) || 0) + 1);
    }
    return ans;
}
console.log(findTarget(numsArray, k));

// Given an array of positive integers nums and an integer k. 
// Find the number of subarrays with exactly k odd numbers in them.

let array = [1, 1, 2, 1, 1, 1], z = 3;

function numberOfNiceSubarrays(arr, k){
    let map = new Map();
    map.set(0 , 1);
    let curr = 0; ans = 0;
    for(let num of arr){
        curr += num % 2;
        ans += (map.get(curr - k) || 0);
        map.set(curr, (map.get(curr) || 0) + 1);
    }
    return ans;
}

console.log(numberOfNiceSubarrays(array, z));


// You are given an integer array matches where matches[i] = [winneri, loseri]
// indicates that the player winneri defeated player loseri in a match.
// Return a list answer of size 2 where:
// answer[0] is a list of all players that have not lost any matches.
// answer[1] is a list of all players that have lost exactly one match.
// The values in the two lists should be returned in increasing order.

let matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]];

function findWinners(arr){
    let looserMap = new Map();
    let winnerMap = new Map();
    let loosers = [];
    let winners = [];
    for(let match of arr){
        looserMap.set(match[1], (looserMap.get(match[1]) || 0) + 1);
        winnerMap.set(match[0], (winnerMap.get(match[0]) || 0) + 1);
    }
    for(let [key, val] of looserMap){
        if(val == 1){
            loosers.push(key);
        }
    }
    for(let key of winnerMap.keys()){
        if(winnerMap.has(key) && !looserMap.has(key)){
            winners.push(key);
        }
    }

    return [winners.sort((a,b) => a - b), loosers.sort((a,b) => a - b)];
}

console.log(findWinners(matches));

// Given an integer array nums, return the largest integer that only occurs once. If no integer occurs once, return -1.

let notUniqueNums = [9,9,8,8];

function largetsUniqueNumber(arr){
    let map = new Map();
    let unique = [];
    for(let num of arr){
        map.set(num, (map.get(num) || 0 ) + 1);
    }
    for(let [key, val] of map){
        if(val == 1){
            unique.push(key);
        }else{
            unique.push(-1);
        }
    }
    let ans = unique.sort((a,b) => b - a);
    return ans[0];
}

console.log(largetsUniqueNumber(nums));


// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

let balloon = 'balon';

function sortString(str){
    let map = new Map()
    for(let char of str){
        map.set(char,(map.get(char) || 0) + 1);
    }
    let bCount = map.get("b") || 0;
    let aCount = map.get("a") || 0;
    let lCount = Math.trunc(map.get("l") / 2) || 0 ;
    let oCount = Math.trunc(map.get("o") / 2) || 0;
    let nCount = map.get("n") || 0;
    return Math.min(bCount,aCount,lCount,oCount,nCount);
}

console.log(sortString(balloon));

// Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

let binaryNums = [0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,];

function longestBinarySubarray(arr){
    let map = new Map();
    let ans = 0; sum = 0;
    map.set(0, -1);
    for(let i = 0; i < arr.length; i++){
        sum += arr[i] === 1 ? 1 : -1;
        if(map.has(sum)){
            ans = Math.max(ans, i - map.get(sum));
        }else{
            map.set(sum, i);
        }
    }
    return ans;
}

console.log(longestBinarySubarray(binaryNums));


// Given an array of strings strs, group the anagrams together.

let strings = ["eat","tea","tan","ate","nat","bat"];

function groupAnagram(strs){
    let map = new Map();
    let ans = [];
    for(let str of strs){
        let key = str.split("").sort().join("");
        if(!map.has(key)){
            map.set(key, []);
        }
        map.get(key).push(str);
    }
    for(let val of map.values()){
        ans.push(val);
    }
    return ans;
}

console.log(groupAnagram(strings));


// Given an integer array cards, find the length of the shortest subarray that 
// contains at least one duplicate. If the array has no duplicates, return -1.

let numArray = [1,2,6,3,4,2,2,7,8,9,0,2,1];

function minimumCardPickup(arr){
    let map = new Map();
    let ans = Infinity;
    for(let i = 0; i < arr.length; i++){
        if(map.has(arr[i])){
            ans = Math.min(ans, i - map.get(arr[i]) + 1);
        }
        map.set(arr[i], i);
        // map.get(arr[i]).push(i);
    }
    return ans == Infinity ? -1 : ans;
}

console.log(minimumCardPickup(numArray));

// Given an array of integers nums, find the maximum value of nums[i] + nums[j], where 
// nums[i] and nums[j] have the same digit sum (the sum of their individual digits). 
// Return -1 if there is no pair of numbers with the same digit sum.

let numbs = [18, 43, 35, 13, 60];

function maxSum(arr){
    function getSumDigit(num){
        let digitSum = 0;
        while(num > 0){
            digitSum += num % 10;
            num = Math.floor(num / 10);
        }
        return digitSum;
    }
    let map = new Map();
    let ans = -1
    for(let num of arr){
        let digitSum = getSumDigit(num);
        if(map.has(digitSum)){
            ans = Math.max(ans, num + map.get(digitSum));
        }
        map.set(digitSum, Math.max(map.get(digitSum) || 0, num))
    }
    return ans;
}

console.log(maxSum(numbs));

// Given two strings ransomNote and magazine, return true if ransomNote can be 
// constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

let ransomNote = "fihjjjjei", magazine = "hjibagacbhadfaefdjaeaebgi";

function findRansomNote(ransomNote, magazine){
    let ransomNoteMap = new Map();
    let ransomSet = new Set(ransomNote);
    let magazineMap = new Map();
    for(let char of ransomNote){
        ransomNoteMap.set(char, (ransomNoteMap.get(char) || 0) + 1);
    }
    for(let char of magazine){
        magazineMap.set(char, (magazineMap.get(char) || 0) + 1);
    }
    let set = new Set()
    for(let key of ransomNoteMap.keys()){
        if(ransomNoteMap.get(key) <= magazineMap.get(key)){
            set.add(key);
        }
    }
    return set.size === ransomSet.size;
}

console.log(findRansomNote(ransomNote, magazine))


// You're given strings jewels representing the types of stones that are jewels, 
// and stones representing the stones you have. Each character in stones is a type of
// stone you have. You want to know how many of the stones you have are also jewels.

let jewels = "aAb", stones = "aAAbbbbuyijkl;a";

function findJewels(jewels, stones){
    let jewelsMap = new Map();
    let stonesMap = new Map();
    let ans = 0;
    for(let char of jewels){
        jewelsMap.set(char, (jewelsMap.set(char) || 0) + 1);
    }
    for(let char of stones){
        stonesMap.set(char, (stonesMap.get(char) || 0) + 1);
    }
    for(let [key, val] of stonesMap){
        if(jewelsMap.has(key)){
            ans += val;
        }
    }
    return ans;
}

console.log(findJewels(jewels, stones));

// Given a string s, find the length of the longest substring without duplicate characters.

let aString = "abhjkklcabcbb";

function findWithoutDups(str){
    let map = new Map();
    let l = 0; ans = 0;
    for(let r = 0; r < str.length; r++){
        map.set(str[r], (map.get(str[r]) || 0) + 1);
        while(map.get(str[r]) > 1){
            map.set(str[l], map.get(str[l]) - 1);
            if(map.get(str[l]) == 0){
                map.delete(str[l]);
            }
            l++;
        }
        ans = Math.max(ans, r - l + 1);
    }
    return ans;
}

console.log(findWithoutDups(aString));

// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

// Each letter in pattern maps to exactly one unique word in s.
// Each unique word in s maps to exactly one letter in pattern.
// No two letters map to the same word, and no two words map to the same letter.

let pattern = "aabar", str = "dog dog dog dog";

function find(pattern, s){
    let words = s.split(" ");
    let charToWord = new Map();
    let wordToChar = new Map();
    if(words.length != pattern.length) return false;
    for(let i = 0; i < pattern.length; i++){
        charToWord.set(pattern[i], words[i])
    }
    for(let i = 0; i < words.length; i++){
        wordToChar.set(words[i], pattern[i]);
    }
    for (let i = 0; i < pattern.length; i++) {
        // const char = pattern[i];
        // const word = words[i];
        if (
            (charToWord.has(pattern[i]) && charToWord.get(pattern[i]) !== words[i]) ||
            (wordToChar.has(words[i]) && wordToChar.get(words[i]) !== pattern[i])
        ) {
            return false;
        }
    }

    return true;
}

console.log(find(pattern, str));