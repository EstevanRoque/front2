alert('oi')

/*nomes de arquivos kebab-case (conceitos-baiscos.js)
variais , objetos e funcoes camelCase
classes metodos PascalCase

*/


const nome = "Estevan" //nao pode mudar o valor
let idade = 39 //pode mudar o valor
let cidade = "limeira"
estado = "SP" // forma antiga
var bairro = "Centro"
idade = 22

console.log(nome)
console.log("ola, " + nome + " Voce mora em " + cidade) //forma tradicional
console.log(`ola, ${nome}  Voce mora em  ${cidade}`) //template string

const frutasFrescas = ["morango", "banana", "uva", "limao", "abacaxi"]
const numeros = []
console.log(frutasFrescas[3])
frutasFrescas.forEach(fruta =>console.log(fruta))


for(let contador=1; contador<50 ; contador++){

    console.log(`o valor da variavel contador é : ${contador}`)

}


function minhaFuncao(a,b,c){
    return a + b +c
}
console.log(` esse é o resultado da funcao: ${minhaFuncao(20,20,30)}`)