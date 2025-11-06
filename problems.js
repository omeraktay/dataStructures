// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

// Each letter in pattern maps to exactly one unique word in s.
// Each unique word in s maps to exactly one letter in pattern.
// No two letters map to the same word, and no two words map to the same letter.

let pattern = "abba", s = "dog cat cat fish";

function find(pattern, s){
    let words = s.split(" ");
    let patternMap = new Map();
    let wordMap = new Map();
    if(words.length != pattern.length) return false;
    for(let i = 0; i < pattern.length; i++){
        patternMap.set(pattern[i], words[i]);
    }
    for(let i = 0; i < words.length; i++){
        wordMap.set(words[i], pattern[i]);
    }
    for(let i = 0; i < pattern.length; i++){
        if(
            (patternMap.has(pattern[i]) && patternMap.get(pattern[i]) != words[i]) ||
            (wordMap.has(words[i]) && wordMap.get(words[i]) != pattern[i])
        ){
            return false;
        }
    }
    return true;
}


console.log(find(pattern, s));