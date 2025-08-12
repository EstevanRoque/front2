export default function btus() {

    const botaoBtu = document.getElementById("calcularBtus")
    const resultadoBtus = document.querySelector("#resultadoBtus")


    botaoBtu.addEventListener("click", function () {


        const largura = document.getElementById("largura").value
        const comprimento = document.getElementById("comprimento").value
        const solManha = document.querySelector("#sol-manha").checked
        const solTanha = document.querySelector("#sol-tarde").checked


        if (isNaN(largura) || isNaN(comprimento) || largura <= 0 || comprimento <= 0 || (!solManha && !solTanha)) {
            resultadoBtus.innerHTML = "Verifique os dados informados"
            resultadoBtus.classList.remove("alertaVermelho", "alertaVerde")
            resultadoBtus.classList.add("alertaVermelho")
            return

        }

        const metroTotal = largura * comprimento
        const solVariante = solManha ? 600 : 800
        const totalBtu = metroTotal * solVariante

    

        resultadoBtus.classList.remove("alertaVermelho", "alertaVerde")
        resultadoBtus.innerHTML = `Você precisa comprar um ar condicionado de total de Btus igual a : ${totalBtu}`

        resultadoBtus.classList.add("alertaVerde")

    })

}

//sol manha 600 sol tarde 800