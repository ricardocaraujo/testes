const numbers = [1, 2, 3, 4, 5];

const output = except(numbers, [1, 2]);

//indexOf também pode utilizar com objetos
console.log(numbers.indexOf(2));
console.log(numbers.lastIndexOf(4));
console.log(numbers.indexOf(2, 2));

const numbersPrim = [4, 5, 1, 4, 5];
const numbersObj = [{i: 'a', e: 9}, {i: 'a', e: 10}];

numbersPrim.includes(1); //utilizado para tipos primitivos
const found = numbersObj.find(elemento =>  elemento.i === 'a'); // utilizado para objetos

//adiciona elementos
numbers.push(9);
numbers.unshift(1);
numbers.splice(2, 0, 10, 13); //adiciona os elementos 10 e 13 a partir do índice 2, sem excluir nenhum 0 elemento

//remove elementos
numbers.pop(); //remove o último elemento do array
numbers.shift(1); //remove o primeiro elemento do array
numbers.splice(2, 1); //remove 1 elemento no index 2. é o mesmo do slice do adiciona, mas não há adição de elementos aqui

//esvaziando arrays
numbers = [];
numbers.length = 0;
numbers.splice(0, numbers.length) // a partir da posição 0, remover todos os elementos do array

//concatenar arrays
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);

const slice = combined.slice(2, 4); //fatia o array e devolve [3, 4, 5, 6]. segundo parâmetro é opcional

//é possível também concatenar array de objeto com primitivo. é guardado uma referência do objeto no array
const third = [{id: 1}];
const fourth = [4, 5, 6];

const combined2 = third.concat(fourth); // resultado [{id: 1}, 4, 5, 6]

//é possível concatenar usando spread operator

const combineSpread = [...first, ...second]; // também pode incluir mais elementos [...first, 8, ...second, 9]

const copiaArray = [...combineSpread] //copia todos os elmentos do array no novo array copiaArray

//iterando num array
numbers.forEach(number => console.log(number));
//com index
numbers.forEach((number, index) => console.log(index, number));

//join arrays
const numbers2 = [0, 1, 2, 3];
const numbers3 = numbers2.join(',');//0,1,2,3

//split
const message = 'aro ola oi'
const parts = message.split(' ');//transforma a string em array retirando os espaços ['aro', 'ola', 'oi']

//sort com números
const numbers4 = [0, 1, 2, 3];
numbers4.sort();
numbers4.reverse();

//sort com objetos
const cursos = [{id: 1, nome: 'curso1'},{id: 2, nome: 'curso2'}]

//prestar atenção na comparação com letra maiúscula e minúscula
cursos.sort((a, b) => {
    if(a.nome < b.nome) return -1;
    if(a.nome > b.nome) return 1;
    return 0;
})

//every - retorna boolean
const numbers5 = [1, 2, 3];
const todosPositivos = numbers5.every(numero => numero > 10); // se encontrar um elemento que não satisfaz a condição, retorna false e para a iteração

//some - retorna boolean
const umPositivo = numbers5.some(numero => numero > 10); // se encontrar um elemento que satisfaz a condição, retorna true e para a iteração

//filter
const numbers6 = [1, 2, 3];
const arrayFilter = numbers6.filter(number => numero > 5);

//map
const numbers7 = [1, 2, 3];
const arrayMap = numbers7.map(numero => '<li>' + numero + '</li>');
const items = numbers7.map(numero => {
    const obj = {value: numero};
    return obj;
});

//reduce
const numbers8 = [1, 2, 3];

const soma1 = numbers8.reduce((accumulator, currentValue) => {//na primeira iteração, acumulator = 1 e currentValue = 2
    return accumulator + currentValue;
});
// ou pode ser feito da seguinte forma:
const soma2 = numbers8.reduce((accumulator, currentValue) => {//na primeira iteração, acumulator = 0 e currentValue = 1
    return accumulator + currentValue;
}, 0); // accumulator inicializado com 0

function except(array, excluded) {

}