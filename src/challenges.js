// Desafio 1
const compareTrue = (valor1, valor2) => valor1 && valor2;

// Desafio 2
const calcArea = (base, altura) => (base * altura) / 2;

// Desafio 3
const splitSentence = (frase) => frase.split(' ');

// Desafio 4
const concatName = (parametro) => `${parametro[parametro.length - 1]}, ${parametro[0]}`;

// Desafio 5
const footballPoints = (wins, ties) => (wins * 3) + ties;

// Desafio 6
const highestCount = (arrayDeFora) => {
  const maiorNumero = Math.max(...arrayDeFora);
  let count = 0;
  arrayDeFora.forEach((repeticao) => {
    if (repeticao === maiorNumero) {
      count += 1;
    }
  });
  return count;
};

// Desafio 7
// Como encontrar numeros mais proximos https://pt.stackoverflow.com/questions/242363/como-encontrar-o-n%C3%BAmero-mais-aproximado-com-javascript
const catAndMouse = (mouse, cat1, cat2) => {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
};

// Desafio 8
function fizzBuzz(fizz) {
  const resultado = [];
  fizz.forEach((index) => {
    if (index % 3 === 0 && index % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (index % 3 === 0) {
      resultado.push('fizz');
    } else if (index % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  });
  return resultado;
}

// Desafio 9
// como trocar vogais por numeros e vice-versa : https://pt.stackoverflow.com/questions/525266/como-trocar-vogais-de-uma-string-por-n%C3%BAmeros
const encode = (recebeString) => {
  let resultado = recebeString;
  if (recebeString) {
    resultado = resultado.replace(/a/g, 1);
    resultado = resultado.replace(/e/g, 2);
    resultado = resultado.replace(/i/g, 3);
    resultado = resultado.replace(/o/g, 4);
    resultado = resultado.replace(/u/g, 5);
  }
  return resultado;
};
const decode = (decodificando) => {
  let resultado = decodificando;
  if (decodificando) {
    resultado = resultado.replace(/1/g, 'a');
    resultado = resultado.replace(/2/g, 'e');
    resultado = resultado.replace(/3/g, 'i');
    resultado = resultado.replace(/4/g, 'o');
    resultado = resultado.replace(/5/g, 'u');
  }
  return resultado;
};
// Desafio 10
const techList = (param1, param2) => {
  if (!param1.length) return 'Vazio!';
  const arrayOrdenado = param1.sort();
  const arrayObjeto = [];
  arrayOrdenado.forEach((index) => {
    const newObj = { tech: index, name: param2 };
    arrayObjeto.push(newObj);
  });
  return arrayObjeto;
};
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
