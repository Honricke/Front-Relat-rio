function criarPadrao(nome){
    const parent = document.getElementById("padrao_box")

    const newLabel = document.createElement("label")
    newLabel.classList.add("padrao_check")

    const newP = document.createElement("p")
    newP.innerHTML = nome

    const newRadio = document.createElement("input")
    newRadio.setAttribute("type","radio")
    newRadio.setAttribute("checked",true)

    newLabel.appendChild(newP)
    newLabel.appendChild(newRadio)
    parent.appendChild(newLabel)
}
criarPadrao("Estrategia teste")