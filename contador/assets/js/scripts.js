// Chama a função de incremento a cada click no botão 'add'
document.getElementById("add").addEventListener("click", increment); 

// Chama a função de decremento a cada click no botão 'subtract'
document.getElementById("subtract").addEventListener("click", decrement);

// Insere cada botão em sua respectiva variável para facilitar a invocação do mesmo
let buttonSub = document.getElementById("subtract");
let buttonAdd = document.getElementById("add");

let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

// Função que muda a cor dos números se forem negativos, zero ou positivos
function setColor() {
  if(count < 0){
    CURRENT_NUMBER.style.color = "#f08080";
  } else if (count === 0){
    CURRENT_NUMBER.style.color = "#000"
  } else {
    CURRENT_NUMBER.style.color = "#32bd67";
  }
}

function increment() {
  // Habilita o botão e realiza o incremento ao clicar nele
  count++;
  buttonSub.disabled = false;
  CURRENT_NUMBER.innerHTML = count;

  // Caso o contador chegue ao número 10, o botão de incremento é desabilitado
  if(count === 10){
    buttonAdd.disabled = true;
  } else {
    buttonAdd.disabled = false;
  }

  // Invoca a função que muda a cor do número
  setColor();
}

function decrement() {
  // Habilita o botão e realiza o decremento ao clicar nele
  count--;
  buttonAdd.disabled = false;
  CURRENT_NUMBER.innerHTML = count;

  // Caso o contador chegue ao número -10, o botão de decremento é desabilitado
  if(count === -10){
    buttonSub.disabled = true;
  } else {
    buttonSub.disabled = false;
  }

  // Invoca a função que muda a cor do número
  setColor();
}