import React from 'react'

function Cardprodutos(prop) {
  return (
    <div className="cont-card">

      {prop.p.imagem && (
        // <p className='imagem-produto'>{prop.p.imagem}</p>
        <img src={prop.p.imagem} alt={prop.p.nome} />
      )}


      <h2>{prop.p.nome}</h2>

      {prop.p.preco && (
        <p>R$ {prop.p.preco.toFixed(2).replace('.', ',')}</p>
      )}

      {prop.p.raca && (
        <p>Raça: {prop.p.raca}</p>
      )}

      {prop.p.idade && (
        <p>Idade: {prop.p.idade} anos</p>
      )}

      {prop.p.pelagem && (
        <p>Pelagem: {prop.p.pelagem}</p>
      )}

    </div>
  )
}

export default Cardprodutos