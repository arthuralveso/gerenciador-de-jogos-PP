import React, {useState, useEffect} from 'react';
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css'
import { Link, useHistory, useParams } from 'react-router-dom';
import api from '../../services/api';

// import { Container } from './styles';

export default function CreateGame() {
  const[title, setTitle] = useState('');
  const[description, setDescription] = useState('');
  const[developer, setDeveloper] = useState('');
  const[photo, setPhoto] = useState('');

  const history = useHistory();
  const {id} = useParams();
  


    useEffect(() => {
      if (id !== undefined) {
        api.get(`details/${id}`)
        .then(response => {
          setTitle(response.data.title)
          setDescription(response.data.description) 
          setDeveloper(response.data.developer)
          setPhoto(response.data.photo)
        })
      }
    }, [id]);

    async function handleSubmit(e) {
      e.preventDefault();
  
      const data = {
        title,
        description,
        developer,
        photo,     
      };  
    

    if (id === undefined) {
      await api.post('games', data)
      history.push('/games');
      
    } else {
      await api.put(`games/${id}`, data)
        history.push('/games');
     
    }
  }

  return (
    <div className="register-container">
    <div className="content">
      <section>
        <p>Cadastre um novo game ou edite um já existente</p>
        <Link to="/games" className="back-link">
        <FiArrowLeft size={16} color="#e02041" />
        Voltar
      </Link>

      </section>
      <form onSubmit={handleSubmit}>
        <input 
         placeholder="Titulo do game"
         value={title}
         onChange={e => setTitle(e.target.value)}
        />
        <input 
          placeholder="Descrição"
          value={description}
          onChange={e => setDescription(e.target.value)}
       />
        <input
         placeholder="Desenvolvido por..." 
         value={developer}
         onChange={e => setDeveloper(e.target.value)}
         />
        <div className="input-group">
          <input 
          placeholder="Link da foto" 
          value={photo}
          onChange={e => setPhoto(e.target.value)}
          />
        </div>

        <button className="button">Cadastrar</button>

      </form>
    </div>
  </div>
  );
}
