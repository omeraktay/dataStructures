// let numbers = [5, 2, 10, 3, -9, 6, -12, 34, -77, 2, 4, -56, 77,  -43, -6, 9, 1, 15];

let numbers = [-500, 2, 10, 3, -9, 6, -12, 77, 2, 4, -56, 77, 43, -6, 9, -34, 1, 15];

let maxSum = numbers[0];
let currentSum = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  // Either add the current number to the existing sum or start fresh
  currentSum = Math.max(numbers[i], currentSum + numbers[i]);
  // Update the global max if the current sum is greater
  maxSum = Math.max(maxSum, currentSum);
}

console.log("Largest sum of a subarray:", maxSum);

function mostExpenses(arr){
    let first = -Infinity;
    let second = -Infinity;
    for(let amount of arr){
        if(amount > first){
            second = first;
            first = amount;
        }
        else if(amount > second){
            second = amount;
        }
    }
    return `${first} + ${second}`;
}

console.log(mostExpenses(numbers));

function total(arr){
    let total = 0;
    for(let num of arr){
        total += num;
    }
    return total;
}

console.log(total(numbers))