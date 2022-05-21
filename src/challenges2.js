// Desafio 11
function generatePhoneNumber(phone) {
  if (phone.length < 11 || phone.length > 11) {
    return 'Array com tamanho incorreto.';
  }
  let numerosRepitidos = 0;
  for (let index = 0; index < phone.length; index +=1) {
    if (phone[index] < 0 || phone[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let secondIndex = 0; secondIndex < index; secondIndex +=1) {
      if (phone[index] === phone[secondIndex]) {
        numerosRepitidos +=1;
      }
    }
  }
  if (numerosRepitidos > 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let numberPhone = [];
  for (let index = 0; index < phone.length; index +=1) {
    numberPhone.push(phone[index]);
  }
  let numberPhone2 = '(' + numberPhone[0] + numberPhone[1] + ')' + ' ';
  for (let index = 2; index < 7; index +=1) {
    numberPhone2 += numberPhone[index];
  }
  let numberPhone3 = numberPhone2 + '-';
  for (let index = 7; index < 11; index +=1) {
    numberPhone3 += numberPhone[index];
  }
  return numberPhone3;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineA + lineB)) {
    if(lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB)) {
    }
    return true;
  }
  return false;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
