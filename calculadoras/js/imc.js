export default function imc() {

    const botaoImc = document.getElementById("calcularImc")
    const resultadoImc = document.querySelector("#resultadoImc")

    botaoImc.addEventListener("click", function () {

        const peso = document.getElementById("peso").value
        const altura = document.getElementById("altura").value


        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            resultadoImc.innerHTML = "Verifique os dados informados"
            resultadoImc.classList.remove("alertaVermelho", "alertaVerde", "alertaAmarelo")
            resultadoImc.classList.add("alertaVermelho")
            return

        }

        const valorImc = peso / (altura * altura)
        let classificacao
        let cor
        if (valorImc < 18.5) {

            classificacao = "Magreza"
            cor = "alertaVermelho"

        } else if (valorImc < 24.9) {
            classificacao = "normal"
            cor = "alertaVerde"
        } else if (valorImc < 29.9) {
            classificacao = "Sobrepeso"
            cor = "alertaAmarelo"

        } else {
            classificacao = "Obesidade"
            cor = "alertaVermelho"
        }

        resultadoImc.innerHTML = `Voce esta : ${classificacao} <br> seu imc : ${valorImc.toFixed(2)}`
        resultadoImc.classList.remove("alertaVermelho", "alertaVerde", "alertaAmarelo")
        resultadoImc.classList.add(cor)
    })


}