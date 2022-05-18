// Desafio 1
function compareTrue(valor1, valor2) {
  if(valor1 && valor2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(frase) {
  let arrayFrase = frase.split(" ");
  return arrayFrase;
}

// Desafio 4
function concatName(parametro) {
  return parametro[parametro.length -1] + ',' + ' ' + parametro[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = (wins * 3) + (ties * 1);
  return resultado;
}

// Desafio 6
function highestCount(arrayDeFora) {
    let maiorNumero = arrayDeFora[0];
    for (let index = 0; index < arrayDeFora.length; index +=1) {
      if (arrayDeFora[index] > maiorNumero) {
        maiorNumero = arrayDeFora[index];
      }
    }
    let repeticao = 0;
    for (let index = 0; index < arrayDeFora.length; index +=1) {
      if (arrayDeFora[index] === maiorNumero) {
        repeticao +=1;
      }
    }
    return repeticao;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
