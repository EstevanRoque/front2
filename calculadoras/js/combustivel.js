export default function combustivel() {

    const botaoComb = document.getElementById("calcularCombustivel")
    const resultadoCombustivel = document.querySelector("#resultadoCombustivel")

    botaoComb.addEventListener("click", function () {

        const alcool = document.getElementById("alcool").value
        const gasolina = document.getElementById("gasolina").value
        if (isNaN(alcool) || isNaN(gasolina) || alcool <= 0 || gasolina <= 0) {
            resultadoCombustivel.innerHTML = "Verifique os dados informados"
            resultadoCombustivel.classList.remove("alertaVermelho", "alertaVerde", "alertaAmarelo")
            resultadoCombustivel.classList.add("alertaVermelho")
            return

        }

        const diferenca = alcool / gasolina

        let valeApena
        let cor2
        if (diferenca > 0.7) {
            valeApena = "Gasolina"
            cor2 = "alertaAmarelo"

        } else {
            valeApena = "Alcool"
            cor2 = "alertaVerde"
        }


        resultadoCombustivel.innerHTML = `O combustivel que vale a pena : ${valeApena}`
        resultadoCombustivel.classList.remove("alertaVermelho", "alertaVerde", "alertaAmarelo")
        resultadoCombustivel.classList.add(cor2)

    })

}