export default function dark() {


    const toggle = document.querySelector("#toggle")

    //leitura do storage para verificar modo salvo
    const modoSelecionado = localStorage.getItem("modo")
    //aplicar classe dark caso ja estivese selecionado
    if (modoSelecionado == "dark-mode") {
        document.body.classList.add("dark-mode")
        toggle.checked = true
    }
    toggle.addEventListener("change", () => {

        document.body.classList.toggle("dark-mode")


        //  let modoSelecionado = "light"
        //  if(toggle.checked){
        //      modoSelecionado="dark"
        //   }
        const modoSelecionado = toggle.checked ? "dark-mode" : "light-mode"
        localStorage.removeItem("modo")
        localStorage.setItem("modo", modoSelecionado)

    })
}