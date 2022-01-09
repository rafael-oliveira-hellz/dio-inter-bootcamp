function calculadora() {
    const operation = Number(prompt("Escolha qual a operação deseja fazer: \n1 - Soma (+) \n2 - Subtração (-) \n3 - Multiplicação (*) \n4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)"));

    let n1 = Number(prompt("Digite o primeiro valor: "));
    let n2 = Number(prompt("Digite o segundo valor: "));
    let resultado;

    function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
    }

    function subtracao() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
    }

    function multiplicacao() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
    }

    function divisaoReal() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
    }

    function divisaoInteira() {
        resultado = n1 % n2;
        alert(`${n1} % ${n2} = ${resultado}`);
    }

    function potenciacao() {
        resultado = n1 ** n2;
        alert(`${n1} ** ${n2} = ${resultado}`);
    }

    if (operation == 1) {
        soma();
    } else if (operation == 2) {
        subtracao();
    } else if (operation == 3) {
        multiplicacao();
    } else if (operation == 4) {
        divisaoReal();
    } else if (operation == 5) {
        divisaoInteira();
    } else if (operation == 6) {
        potenciacao();
    } else {
        alert("Você digitou uma operação inválida!");
    }
}

calculadora();
