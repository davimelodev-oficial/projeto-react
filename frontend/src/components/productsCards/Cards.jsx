import supabase from '../../services/supaBaseClient.js'
import '../../components/productsCards/cards.css'
import { useEffect, useState } from "react"

function Cards() {
    const [produtosListados, setProdutosListados] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [produtoSelecionado, setProdutoSelecionado] = useState(null)

    useEffect(() => {

        async function getProducts() {

            setLoading(true)

            let { data: produtos, error } = await supabase
                .from('produtos')
                .select('*')

            if (error) {
                setError(true)
            }
            else {
                setProdutosListados(produtos)
            }
            setLoading(false)
        }
        getProducts()
    }, [])
    if (error) {
        return (
            <div>
                <h1>Erro ao buscar dados!</h1>
            </div>
        )
    }
    if (loading) {
        return (
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }
    if (produtoSelecionado) {
        return (
            <div>
                <h1>{produtoSelecionado.nome}</h1>
                <p>{produtoSelecionado.descricao}</p>
                <h2>{produtoSelecionado.preco}</h2>
                <button onClick={() => setProdutoSelecionado(null)}>Voltar</button>
            </div>
        )
    }
    return (
        <>
            {produtosListados.map(produto => (
                <div key={produto.id}>
                    <h1>{produto.nome}</h1>
                    <p>{produto.descricao}</p>
                    <h2>{produto.preco}</h2>
                    <button onClick={() => setProdutoSelecionado(produto)}>Ver Produto</button>
                </div>
            ))
            }
            <br />
            <br />
            <br />
            <br />
        </>
    )
}

export default Cards 