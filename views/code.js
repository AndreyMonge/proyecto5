const modalPokemon = new bootstrap.Modal(document.getElementById('modalPokemon'))

const on = (element, event, selector, handler)=>{
    console.log(element)
    element.addEventListener(event, e => {
        if (e.target.closest(selector)){
            handler(e)
        }
    })
}

on(document, 'click', '.btnEditar', e =>{
    const fila = e.target.parentNode.parentNode
    id_editar.value = fila.children[0].innerHTML
    nombre_editar.value = fila.children[1].innerHTML
    modalPokemon.show()
})
