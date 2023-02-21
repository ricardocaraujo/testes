function exemplo() {
    console.log('teste');
}

const funcao = function() {
    console.log('teste');
}

function sum(a, b) {
    let total = 0;
    for(let value of arguments) {
        total += value;
    }
    return total;
}

sum(1, 2, 3, 4, 5, 6);

//uma maneira melhor de escrever o método acima:
function sum2(...args) {
    let total = 0;
    return args.reduce((a, b) => a + b);
}

sum2(1, 2, 3, 4, 5, 6);

//default parameters
function interest(principal, rate, years) {
    rate = rate || 3.5;
    years = years || 10;
}

//default parameters também pode ser escrito dessa forma:
function interest(principal, rate = 3.5, years = 10) {

}

//getters and setters
const person1 = {
    firstName: 'ricardo',
    lastName: 'araujo',
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
// atribuindo getters and setters
const person2 = {
    firstName: 'ricardo',
    lastName: 'araujo',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        if(typeof value !== 'string') {
            throw new Error('valor não é string ')
        }
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

try {
    person2.fullName = 'João Caio'; //observar que a chamada do get/set pode ser feito como uma chamada de atributo}
} catch(e) {
    console.log(e);
}


//this
function playVideo() {
    console.log(this);
}

playVideo(); //mostra o window object

function Video(title) {
    this.title = title;
    console.log(this);
}

const video = new Video('a'); //mostra o video object

function playVideo() {
    console.log(this); //o this mostra o window object. este problema pode ser resolvido utilizando uma das seguintes formas:
}

playVideo.call({nome: 'Ricardo'}); // chama o playVideo e faz o this apontar para o objeto passado como argumento
playVideo.apply({nome: 'Ricardo'}); // chama o playVideo e faz o this apontar para o objeto passado como argumento
const fn = playVideo.bind({nome: 'Ricardo'}); // devolve uma nova função com o this apontando para o objeto passado no parâmetro permanentemente 
fn();

// para criação de objeto por constructor function, não é necessário escrever return, pois o new ja faz automaticamente. Só é necessário por factory function

let x = {} // é o mesmo que fazer let x = new Object(). x.constructor mostra o object literal sintax f Object() {}

//toda função é um objeto
function Circle (radius) {
    this.radius = radius;
}

Circle.length;

Circle.constructor // retorna a função que criou o objeto função Circle

const Circle1 = new Function('radius', `this.radius = radius`)

//é possível adicionar/deletar propriedades e métodos dinamicamente ao objeto

function Circle2(radius) {
    this.radius = radius;
}

const circle = new Circle2(10);
circle.location = {x: 1}; //ou circle['location'] = {x: 1};
delete circle.location; //ou circle['location']

// para mostrar as propriedades e métodos de um objeto, mas não os valores das propriedades
const keys = Object.keys(circle);

// para checar se existe uma propriedade no objeto
if('radius' in circle) {
    console.log('circle has a radius');
}

//para tornar um membro privado basta declarar a variável com o let (variável local), desta forma não é parte do objeto porque não está declarado com o this. 