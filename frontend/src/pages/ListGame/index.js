import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPlusCircle } from 'react-icons/fi'
import { FiTrash2 } from 'react-icons/fi'
import './styles.css'

import api from '../../services/api';


export default function ListGame() {
  const [games, setGames] = useState([]);

  async function handleDelete(id) {
    try {
      await api.delete(`games/${id}`)

      setGames(games.filter(game => game.id !== id));
    } catch (err) {
      alert('Erro ao deletar, tente novamente')
    }
  }


  useEffect(() => {
    api.get('games')
    .then(response =>{
      setGames(response.data);
    })
  })

  return (
    <div className="container">
      <header>
        <h1>Gerenciador de Games</h1>

        <Link className="button" to="/create">Cadastrar novo jogo</Link>
      </header>
      <ul>
       { games.map(game => (
          <li key={game.id}>
            <img src={game.photo} alt="gamePhoto"/>
            <strong>{game.title}</strong>
            <div>
              <Link to={`/details/${game.id}`} >
                <FiPlusCircle size={50} color="#3F88C5" /> 
              </Link>
              <button onClick={()=>{handleDelete(game.id)}}>
                <FiTrash2 size={50} color="#D72638" /> 
              </button>
            </div> 
        </li>
       ))}
      </ul>
    </div>
  );
}
