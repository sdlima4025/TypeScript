/**"Toda vez que houver uma mudança tem que executar o 
 * comando de conversão"comando para converter 
 * o js em TS === tsc src/script.ts --outDir Public 
 
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
let nome: string[] = ['Sérgio', 'Silvio', 'Luiz'];

let idades: number[] = [52,54,56,58,60];

let numeros: number[] = [1,2,3,4,5,6];

numeros.push(52);
