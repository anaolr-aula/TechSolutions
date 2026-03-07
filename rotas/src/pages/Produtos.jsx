import '../css/Produtos.css'

function Produtos(){
    const produtos = [
        {
            nome: "Notebook UltraTech",
            preco: "R$ 4.500,00",
            imagem: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=150&q=80"
        },
        {
            nome: "Smartphone X200",
            preco: "R$ 2.300,00",
            imagem: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=150&q=80"
        },
        {
            nome: "Monitor Gamer 270",
            preco: "R$ 1.200,00",
            imagem: "https://d22k5h68hofcrd.cloudfront.net/magefan_blog/hero-monitor-gaming-34.jpg"
        }
    ];

    return(
        <div id="container_produtos">
            <div id="produtos">
                {produtos.map((produto, index) => (
                    <div className="card" key={index}>
                        <h2>{produto.nome}</h2>
                        <div id="imagem" style={{backgroundImage: `url(${produto.imagem})`}}>
                        </div>
                        <span>{produto.preco}</span>
                    </div>
                ))}
            </div>
        </div>
    ) 
}

export default Produtos;