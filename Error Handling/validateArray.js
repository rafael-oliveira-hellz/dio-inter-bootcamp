function validateArray(arr, num) {

    try {
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros!");
    
        if(typeof arr !== 'object') throw new TypeError("O Array precisa ser do tipo object");
    
        if(typeof num !== 'number') throw new TypeError("O Num precisa ser do tipo number");
    
        if(arr.length !== num) throw new RangeError("Tamanho inválido!");
    
        return arr;
    } catch (e) {
        if(e instanceof ReferenceError){
            console.log("Este é um ReferenceError!");
            console.log(e.message);
        } else if(e instanceof TypeError) {
            console.log("Este é um TypeError!");
            console.log(e.message);
        } else if(e instanceof RangeError) {
            console.log("Este é um RangeError!");
            console.log(e.message);
        } else {
            console.log(`Tipo de erro não esperado:  ${e}`);
        }
    }
}

console.log(validateArray([1, 4, 3, 4, 2], 5));