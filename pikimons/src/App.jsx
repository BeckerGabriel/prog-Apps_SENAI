import { useState } from 'react'
import './componentes/Cardproduto.css'
import Cardprodutos from './componentes/Cardprodutos'

function App () {
  const [produtos, setProdutos] = useState([
    {id: 0, nome: 'Kichute', preco: 333, imagem: '👠'},
    {id: 1, nome: 'Monareta', preco: 654, imagem: '🚴'},
    {id: 2, nome: 'Tamagotchi', preco: 22, imagem: '🦕'},
    {id: 3, nome: 'Genius', preco: 100, imagem: '🛸'},
  ])
  
const [cavalos, setCavalos] = useState([
    {
      id: 1,
      nome: "Trovão",
      raca: "Mangalarga Marchador",
      idade: 5,
      pelagem: "Tordilho"
    },
    {
      id: 2,
      nome: "Pérola",
      raca: "Quarto de Milha",
      idade: 4,
      pelagem: "Alazã"
    },
    {
      id: 3,
      nome: "Espírito",
      raca: "Mustang",
      idade: 7,
      pelagem: "Baio"
    },
    {
      id: 4,
      nome: "Apolo",
      raca: "Puro Sangue Inglês",
      idade: 6,
      pelagem: "Castanho"
    },
    {
      id: 5,
      nome: "Luna",
      raca: "Appaloosa",
      idade: 3,
      pelagem: "Sardenta"
    },
    {
      id: 6,
      nome: "Barão",
      raca: "Crioulo",
      idade: 10,
      pelagem: "Zaino"
    },
    {
      id: 7,
      nome: "Zéfiro",
      raca: "Lusitano",
      idade: 8,
      pelagem: "Branco"
    },
    {
      id: 8,
      nome: "Fagulha",
      raca: "Árabe",
      idade: 5,
      pelagem: "Preto"
    },
    {
      id: 9,
      nome: "Diamante",
      raca: "Andaluz",
      idade: 9,
      pelagem: "Cinza"
    },
    {
      id: 10,
      nome: "Cigana",
      raca: "Campolina",
      idade: 4,
      pelagem: "Pampa"
    }
  ])
  const[pokemonhos, setPokemonhos] = useState([
  { id: 200, nome: "Misdreavus", imagem: "https://img.pokemondb.net/sprites/home/normal/misdreavus.png" },
  { id: 201, nome: "Unown", imagem: "https://img.pokemondb.net/sprites/home/normal/unown.png" },
  { id: 202, nome: "Wobbuffet", imagem: "https://img.pokemondb.net/sprites/home/normal/wobbuffet.png" },
  { id: 203, nome: "Girafarig", imagem: "https://img.pokemondb.net/sprites/home/normal/girafarig.png" },
  { id: 204, nome: "Pineco", imagem: "https://img.pokemondb.net/sprites/home/normal/pineco.png" },
  { id: 205, nome: "Forretress", imagem: "https://img.pokemondb.net/sprites/home/normal/forretress.png" },
  { id: 206, nome: "Dunsparce", imagem: "https://img.pokemondb.net/sprites/home/normal/dunsparce.png" },
  { id: 207, nome: "Gligar", imagem: "https://img.pokemondb.net/sprites/home/normal/gligar.png" },
  { id: 208, nome: "Steelix", imagem: "https://img.pokemondb.net/sprites/home/normal/steelix.png" },
  { id: 209, nome: "Snubbull", imagem: "https://img.pokemondb.net/sprites/home/normal/snubbull.png" }
])
  const [imputImagem, setInputImagem] = useState('')
  const [imputNome, setInputNome] = useState('')
  const [imputPreco, setInputPreco] = useState('')

  function cadastrar(){
    let produtoNovo = {
      id: Date.now(), 
      nome: imputNome, 
      preco: Number(imputPreco),
      imagem: imputImagem
    }

    setProdutos([produtoNovo, ...produtos])

    setInputImagem('')
    setInputNome('')
    setInputPreco('')
  }

  return (
    <div>
      <h1>Cards de coisas</h1>
      <section>
  <h2>Cavalos</h2>

  <div className="listacards">
    {
      cavalos.map((cavalo) => (
        <Cardprodutos p={cavalo} key={cavalo.id}/>
      ))
    }
  </div>
</section>

      <hr/>

      <div className="cont-form">
        <h2>cadastro de coisas</h2>

        <label htmlFor="imagem">Imagem:</label>
        <input 
          id="imagem" 
          type="text" 
          value={imputImagem}
          onChange={(e) => setInputImagem(e.target.value)}  
        />

        <label htmlFor="nome">Nome:</label>
        <input 
          id="nome" 
          type="text" 
          value={imputNome}
          onChange={(e) => setInputNome(e.target.value)}  
        /> 

        <label htmlFor="preco">Preço:</label>
        <input 
          id="preco" 
          type="number" 
          value={imputPreco}
          onChange={(e) => setInputPreco(e.target.value)}  
        /> 

        <button onClick={cadastrar}>Cadastrar</button>
      </div>

      <div className="listacards">
        {
          produtos.map((produto) => (
            <Cardprodutos p={produto} key={produto.id}/>
          ))
        }
      </div>
      
      <div className="listacards">
        {
  pokemonhos.map((poke) => (
    <div key={poke.id}>
      <Cardprodutos p={poke} />
      
    </div>
  ))
}
      </div>
    </div>
  )
}

export default App