import { useState, useEffect } from "react"
import "../css/Produtos.css"
import produtosData from "../json/db.json"

function Produtos(){

    const [produtos, setProdutos] = useState(produtosData)


    return(
        <div className="page-container">

            <div id="produtos">

                {produtos.map((produto,index)=>(

                    <div className="tech-card" key={index}>

                        <h2>{produto.nome}</h2>

                        <div
                          className="imagem"
                          style={{backgroundImage:`url(${produto.imagem})`}}
                          aria-label={produto.nome}
                        />

                        <span>{produto.preco}</span>

                    </div>

                ))}

            </div>

        </div>
    )

}

export default Produtos