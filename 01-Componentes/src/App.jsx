import { useState } from "react";
import "./App.css";

export default function App() {

  const [pokemonhos, setPokemonhos] = useState([
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
  ]);

  return (
    <div className="app">
      <h1>Pokémonhos</h1>

      <div className="container">
        {pokemonhos.map((pokemon) => (
          <div className="card" key={pokemon.id}>
            <img
              src={pokemon.imagem}
              alt={pokemon.nome}
            />

            <h2>{pokemon.nome}</h2>

            <p>ID: {pokemon.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}