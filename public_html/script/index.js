window.onload = async () => {
    const response = await fetch("/getEstrategia")
    const data = await response.json()

    data.forEach(estrategia => {
        criarPadrao(estrategia.nome, estrategia.percent, estrategia.id)
    });
}

function formHandler(event){
    event.preventDefault();
}

async function sendData(){
    const form = document.getElementById('filter');
    form.addEventListener('submit', formHandler);

    const response = await fetch('/setData',{
        method: 'POST',
        body: new FormData(form)
    })

    console.log(await response.json())
}

function criarPadrao(nome,percent,id){
    const parent = document.getElementById("padrao_box")

    const newLabel = document.createElement("label")
    newLabel.classList.add("padrao_check")
    
    const newP = document.createElement("p")
    newP.innerHTML = nome+': '+percent+"%"
    
    const newRadio = document.createElement("input")
    newRadio.setAttribute("type","radio")
    newRadio.setAttribute("checked",true)
    newRadio.setAttribute('name',nome.replace(' ',''))
    newRadio.setAttribute('value',id)

    newLabel.appendChild(newP)
    newLabel.appendChild(newRadio)
    parent.appendChild(newLabel)
}