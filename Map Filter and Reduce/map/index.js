// Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro `this` de um objeto criado por você, e depois sem ele.

const apple = {
    value: 2,
};

const orange = {
    value: 3,
};

function mapWithThis(arr, thisArg) {
    return arr.map(function(item) {
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2];

console.log(`this -> apple [${mapWithThis(nums, apple)}]`);
console.log(`this -> orange [${mapWithThis(nums, orange)}]\n\n`);

// Map w/o this

function mapWithoutThis(arr) {
    return arr.map((item) => item * 2);
}

const nums2 = [2, 4, 6, 8, 10];

console.log(`Map without 'this' -> [${mapWithoutThis(nums2)}]`);