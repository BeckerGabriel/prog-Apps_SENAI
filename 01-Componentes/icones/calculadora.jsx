import { useState } from 'react';

export default function Tabuada() {
  const [num, setNum] = useState(2);

  return (
    <div>
      Qual a tabuada, Juca? 
      <input type="number" onChange={e => setNum(e.target.value)} />
      
      {/* Conta mágica e rápida feita direto na tela */}
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
        <p key={i}> {i} x {num} = {i * num} </p>
      ))}
    </div>
  );
}