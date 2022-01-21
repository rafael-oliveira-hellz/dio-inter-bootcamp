//Filtre e retorne todos os números pares de um array.

function filterEvenNums(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const myArray = [1, 23, 55, 67, 30, 2, 4];

console.log(filterEvenNums(myArray));