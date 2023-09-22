/**"Toda vez que houver uma mudança tem que executar o
 * comando de conversão"comando para converter
 * o js em TS === tsc src/script.ts --outDir Public */
var numero1 = document.getElementById("numero1");
var numero2 = document.getElementById("numero2");
var botao = document.getElementById("calcular");
var res = document.getElementById("resultado");
function calcular(n1, n2) {
    return n1 + n2;
    // if (typeof n1 == `number` && typeof n2 == `number`) {
    //   return n1 + n2;
    // } else {
    // n1 = parseInt(n1);
    // n2 = parseInt(n2);
    // forma abreviada de declarar inteiros
}
botao.addEventListener("click", function () {
    res.innerHTML = calcular(+numero1.value, +numero2.value).toString();
});
