// Given an array of strings strs, group the anagrams together.

let strings = ["eat","tea","tan","ate","nat","bat"];

function func(arr){
    let map = new Map();
    let groupAnagram = [];
    for(let str of arr){
        let key = str.split("").sort().join("");
        if(!map.has(key)){
            map.set(key, []);
        }
        map.get(key).push(str);
    }
    for(let val of map.values()){
        groupAnagram.push(val);
    }
    return groupAnagram
}



console.log(func(strings));
