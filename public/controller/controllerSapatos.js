
ListaSapatos = () =>{
    return fetch('http://localhost:8888/api/V1/categories/3')
    .then(res => {
       return res.json()
    })
    .then( res =>{
        return res.items
    })
}  

ListaSapatos().then(exibeSapatos => {
    exibeSapatos.forEach(items => {
        corpoProdutos.appendChild(exibeProdutos(items.image, items.name, items.price));
    })
}
)
