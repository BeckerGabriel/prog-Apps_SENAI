import React from 'react';

export default function TabelaDireta() {
  const precoPorCopia = 0.33;
  const linhasDaTabela = [];

  
  for (let i = 1; i <= 500; i++) {
    
   
    let valorTotal = i * precoPorCopia;
    let valorFormatado = valorTotal.toFixed(2).replace('.', ',');

    
    linhasDaTabela.push(
      <div key={i}>
        {i}: R$ {valorFormatado}
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'monospace', padding: '20px', fontSize: '18px' }}>
      <h2>Tabela de Preços - Harry Plotter 🖨️</h2>
      <strong>Quantidade   Preço</strong>
      <hr style={{ width: '220px', marginLeft: 0, marginBottom: '15px' }} />
      
      {}
      <div>
        {linhasDaTabela}
      </div>
    </div>
  );
}