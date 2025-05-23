import { useEffect, useState } from "react"

function Cards() {

    const [produtos, setProdutos] = useState([])

    const [produtoSelecionado, setProdutoSelecionado] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
         .then(res => res.json())
         .then(data => setProdutos(data))

    }, [])

   if(produtoSelecionado) {
    return (
        <div>
            <img src={produtoSelecionado.image} width={100} height={100} alt="" />
            <h1>{produtoSelecionado.title}</h1>
            <p>{produtoSelecionado.description}</p>
            <button onClick={() => setProdutoSelecionado(null)}>Voltar</button>
        </div>
    )
   }

    return (
        <>
            {produtos.slice(1,10).map(produto => (
                <div key={produto.id}>
                    <img src={produto.image} width={100} height={100} alt="" />
                    <h1>{produto.title}</h1>
                    <p>Descrição: {produto.description}</p>
                    <p>Preço: {produto.price}</p>
                    <button onClick={() => setProdutoSelecionado(produto)}>Visualizar Produto</button>
                </div>
            ))}
        </>
    )
}

export default Cards 