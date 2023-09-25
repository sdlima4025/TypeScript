// - Módulo 2: Typescript Básico

// #1: Como não gerar o JS se tiver erro
/**"Toda vez que houver uma mudança tem que executar o 
 * comando de conversão"comando para converter 
 * o TS em JS === tsc src/script.ts --outDir Public 
 
let numero1 = document.getElementById("numero1") as HTMLInputElement;
let numero2 = document.getElementById("numero2") as HTMLInputElement;
let botao = document.getElementById("calcular") as HTMLButtonElement;
let res = document.getElementById("resultado") as HTMLDivElement;

function calcular(n1:number, n2:number) {
  return n1 + n2;
 
  }

botao.addEventListener("click", function () {
  res.innerHTML = calcular(+numero1.value, +numero2.value).toString();
}); */

// Os types primitivos | use as tipagem sempre em minusculos
// let nome: string = 'Sérgio';

// let idade: number = 53;

// let programador: boolean = true;


// Type em Arrays
// let nome: string[] = ['Sérgio', 'Silvio', 'Luiz'];

// let idades: number[] = [52,54,56,58,60];

// let numeros: number[] = [1,2,3,4,5,6];

// numeros.push(52);

// O type any (e quando usá-lo)
// let nomes: any[] = ['Sérgio', 'Silvio', 'Luiz', 53, true];

// nomes.push(556);

// Usando types nos parâmetros de uma função
// function firstLetterUpperCase(name:string) {
//   let firstLetter = name.charAt(0).toUpperCase();
//   return firstLetter+name.substring(1);
// }

// firstLetterUpperCase(90);



// Usando types no retorno de uma função

//Usando types nos parâmetros de uma função
// function somar(n1: number, n2:number):number {
//   return n1 + n2;
// }

// let total = somar(10,20);

//Contextual(inteligência do typescript) Typing em funções anônimas
// let names = ['Sérgio', 'Silvio', 'Luiz', 'Paulo', 90];

// names.forEach(function(nome){
//   if(typeof nome === 'string'){
//     console.log(nome.toUpperCase());
//   } else {
//     console.log(nome);
//   }
// });


// Types em Objetos

// function resumo(usuario: {nome:string, idade:number}) {
//   return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos!`
// }

// // Implementação da function
// let u = {
//   nome: 'Sérgio',
//   idade: 53
// };
// resumo(u);

// #9: Propriedades Opcionais

// Propriedades Opcionais === ? no valor.
// function resumo(usuario: {nome:string, idade?:number}) {
//   if(usuario.idade !== undefined) {
//     return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos!`;
//   } else {
//     return `Olá ${usuario.nome}, tudo bem?`;
//   }
// }

// // Implementação da function
// let u = {
//   nome: 'Sérgio',
//   idade: 53
// };
// resumo(u);

// Union Types (múltiplos types)
/** em caso de uso agregado de uma função como 
 * toUpperCase que funciona com string,
 * se faz necessário verificação.
function mostrarIdade(idade: string | number) {
  if(typeof idade === `string`) {
    console.log(idade.toUpperCase());
  } else {
    console.log(idade);
  }
}

mostrarIdade(90);
mostrarIdade('90');
*/ 

/** Type e Interface: Como usar e diferenças 
 * pascal case === todo nome começa com letra maiscula

// type Objeto - forma um!
type User = {
  nome: string,
  idade: number
}; 
type é imutavél
inteface é mutavél
*/
// interface User {
//   nome: string,
//   idade: number
// }

// function resumo(usuario: User) {
//   return `Olá ${usuario.nome}, você tem ${usuario.idade} anos`;
// }

// resumo({
//   nome: 'Sérgio',
//   idade: 53
// });

// Type Assertions(ajudando o TS com informação adicional: as HTMLInputElement)
let idadeField = document.getElementById('idade') as HTMLInputElement;


// Types literais
let nome: 'Sérgio' = 'Sérgio';

nome = 'Sérgio' // type literal string === Sérgio

// exemplo dois
// function mostrarTexto(
//   texto: string,
//   alinhamento: 'left' | 'right' | 'center'
// ) {
//   return `<div style='text-alingn: ${alinhamento}'>${texto}</div>`;
// }

// mostrarTexto('Sérgio', 'left');
// mostrarTexto('Silvio', 'right');
// mostrarTexto('Reinaldo', 'blablabla');

// // exemplo dois
// type Opcoes = {
//   width: number,
//   height: number
// }

// function configurar(props:Opcoes | 'auto'){

// }

// configurar({width:100, height:200});
// configurar('auto');
// configurar('automatico');// tipo literal não existe


// Inferência literal -> código fraco que se fa necessário uma Inferencia
// function fazerRequisicao(url: string, method: 'GET' | 'POST') {
//   // ....
// }
// type Methods = 'GET' | 'POST';

// let url = "http://google.com.br";
// let method: Methods = 'GET';
// fazerRequisicao(url, method);

//Type para funções
// type MathFunction = (n1: number, n2: number) => number;

// const somar: MathFunction = (n1, n2) =>{
//   return n1 + n2;
// }
// const subtrair: MathFunction = (n1, n2) =>{
//   return n1 - n2;
// }
// const multiplicar: MathFunction = (n1, n2) =>{
//   return n1 * n2;
// }
// const dividir: MathFunction = (n1, n2) =>{
//   return n1 / n2;
// }
// console.log(somar(10,2));

// Retorno void(sem retorno)
type QualquerFuncao = () => void;

const algo: QualquerFuncao = () => {
  return 12;
}

let retorno = algo();
const blabla = (): void => {
  return 123;
}
/**
 Módulo 3: Configurações do Typescript
 8 aulas
 * 
 */

// #1: Usando o watchMode no arquivo

// #2: Criando o arquivo tsconfig.json

// #3: Escolhendo quais arquivos compilar

// #4: Entendendo o Target

// #5: Trabalhando com Libs no Typescript

// #6: rootDir e outDir

// #7: noComment, noEmit e noEmitOnError

// #8: Configurações para Qualidade do código