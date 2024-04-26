// String Manipulation Methods
function reverseString(str) {
    return str.split('').reverse().join('');
}

function charachterCounter(str){
    return str.length
}

function capitalize(sentence){
    let words = sentence.split(' ')
    let new_words = []
    for(let i of words){
        new_words.push(i.charAt(0).toUpperCase() + i.slice(1))
    }
    return new_words.join(' ')
}

// Array Functions
function findMax(arr){
    return Math.max(arr)
}

function findMin(arr){
    return Math.min(arr)
}

function arrSum(arr){
    return Math.sum(arr)
}

function arrFilter(arr){
    return  arr.filter(num => num % 2 === 0)
}

// Mathematical Functions
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function fibonacci(n) {
    let fibSequence = [0, 1];

    for (let i = 2; i < n; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }

    return fibSequence;
}
