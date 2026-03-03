import React, { useState } from 'react'
import './App.css'

function App() {
  const [nota, setNota] = useState('')
  const [classificacao, setClassificacao] = useState('')

  const obterClassificacao = (valor) => {
    if (valor >= 90) return 'A'
    if (valor >= 80) return 'B'
    if (valor >= 70) return 'C'
    if (valor >= 60) return 'D'
    return 'E'
  }

  const handleChange = (e) => {
    const valor = e.target.value
    setNota(valor)
    if (valor && valor >= 0 && valor <= 100) {
      setClassificacao(obterClassificacao(parseFloat(valor)))
    } else {
      setClassificacao('')
    }
  }

  const cores = {
    A: '#27ae60',
    B: '#2ecc71',
    C: '#f39c12',
    D: '#e67e22',
    E: '#e74c3c'
  }

  return (
    <div className="app">
      <div className="card">
        <h1>Classificação de Notas</h1>
        
        <input
          type="number"
          min="0"
          max="100"
          value={nota}
          onChange={handleChange}
          placeholder="Digite sua nota (0-100)"
          className="input"
        />

        {classificacao && (
          <div className="resultado">
            <div className="nota-badge" style={{ backgroundColor: cores[classificacao] }}>
              {classificacao}
            </div>
            <p>Sua nota: <strong>{nota}</strong></p>
          </div>
        )}
      </div>
    </div>
  )
}