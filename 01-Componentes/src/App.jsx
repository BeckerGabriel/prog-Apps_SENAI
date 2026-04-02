import React, { useState } from 'react'
import "./app.css"
import Contato from './pages/contato'
import Produtos from './pages/produtos'
import Home from './pages/Home'

function App() {
  const [tela, setTela] = useState(<Home />)

  return (
    <div className="cont-app">
      <header className={"cont-header"}>
        <h1>Layout</h1>
        <nav>
          <button className={'botoes-nav'} onClick={() => setTela(<Home/>)}>
            Home
          </button>
          
          {}
          <button className={'botoes-nav'} onClick={() => setTela(<Contato/>)}>
            Contato
          </button>
          
          {}
          <button className={'botoes-nav'} onClick={() => setTela(<Produtos/>)}>
            Produtos
          </button>
        </nav>
      </header>

      <main className={'cont-main'}>
        {tela}
      </main>
    </div>
  )
}

export default App