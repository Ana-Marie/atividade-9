const R = require('ramda');

/*function isEven(number) {
    const n = R.clone(number);
    n.even = n.value % 2 == 0;
    return n;
}*/

const isEven = number =>{
    const n = R.clone(number);
    n.even = n.value % 2 == 0;
    return n;
}
/*
function positive(number) {
    const n = R.clone(number);
    n.positive = n.value > 0;
    return n;
}*/
const positive = number =>{
    const n = R.clone(number);
    n.positive = n.value > 0;
    return n;
}

/*
function isOdd(number) {
    const n = R.clone(number);
    n.odd = n.value % 2 === 1;
    return n;
}*/
const isOdd = number =>{
    const n = R.clone(number);
    n.odd = n.value % 2 === 1;
    return n;
}

/*
function negative(number) {
    const n = R.clone(number);
    n.negative = n.value < 0;
    return n;
}*/
const negative = (number)=>{
    const n = R.clone(number);
    n.negative = n.value < 0;
    return n;
}
/*
function isZero(number) {
    const n = R.clone(number);
    n.zero = n.value === 0;
    return n;
}*/
const isZero = number =>{
    const n = R.clone(number);
    n.zero = n.value === 0;
    return n;

}
/*
function isPrime(number) { // referencia do código da função is Prime: https://www.dcc.fc.up.pt/~pbv/aulas/progimp/teoricas/teorica07.html
    const n = R.clone(number);
    if (n.value <= 1) {
        n.prime = false;
        return n;
    }
    for (d = 2; d * d <= n.value; d++) {
        if (n.value % d == 0) {
            n.prime = false;
            return n;
        }
    }
    n.prime = true;
    return n;
}*/
const isPrime = number =>{
    const n = R.clone(number);
    if (n.value <= 1) {
        n.prime = false;
        return n;
    }
    for (d = 2; d * d <= n.value; d++) {
        if (n.value % d == 0) {
            n.prime = false;
            return n;
        }
    }
    n.prime = true;
    return n;
}


function mapToNumberObject(num) {
    return { value: num };
}

const arr = [-1, 50, 5, 10, -8, 20, 25, 0, 100, 14, -123];
const objArr = arr.map(mapToNumberObject);



// Exercí­cio 1: use map() para transformar 'arr' em objetos usando mapToNumberObject()

// Exercí­cio 2: seguindo o modelo das 2 primeiras funções implemente as outras 4 funções

// Exercí­cio 3: refatore todas as funções para a forma usando arrow function (=>)

// Exercí­cio 4: use R.pipe para compor as funções: isEven, positive, isOdd, negative, 
    // isZero, e isPrime. Teste a função composta com um único objeto.
const assignProperties = R.pipe(isEven,positive,isOdd,negative,isZero,isPrime);
console.log("-----------------test with a object-----------------------");
console.log(assignProperties(objArr[4]));

// Exercí­cio 5: use a função composta do Ex. 4 para transformar os números em 'arr'

// Não entendi muito bem o que é para fazer, mas acrdito que seja isso.
console.log("------------------Array of objects using ex 4 ------------");
const objArr2 =objArr.map(assignProperties);
console.log(objArr2);