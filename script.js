const adicionaItem = (event) => {
    let itemNovo = document.createElement("article")
    itemNovo.classList.add("item")
    itemNovo.onclick = removeItem
    //itemNovo.addEventListener ("click", removeItem)
    let conteudo = document.createTextNode("Conteúdo adicionado")
    itemNovo.appendChild(conteudo)
    const elementoRef = document.getElementById("container")
    elementoRef.insertAdjacentElement("beforeend", itemNovo)
}

const removeItem = (event) => {
   event.target.remove()
}
