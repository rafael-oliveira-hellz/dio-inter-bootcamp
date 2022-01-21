// Somar todos os números de um array

function sumNums(arr) {
    return arr.reduce((previous, current) => previous + current);
}

const arr = [1, 2];

console.log(sumNums(arr));

// Criar uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.

const list = [
    {
        name: 'sabão em pó',
        price: 30,
    },
    {
        name: 'cereal',
        price: 12,
    },
    {
        name: 'toalha',
        price: 25,
    }
];

const balanceAvailable = 100;

function calculateBalance(balanceAvailable, list) {
    return list.reduce(function (previous, current) {
        return previous - current.price;
    }, balanceAvailable);
}

console.log(`Balance Available: ${calculateBalance(balanceAvailable, list)}`);