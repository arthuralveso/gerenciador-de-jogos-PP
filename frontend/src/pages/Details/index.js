import React, { useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiArrowLeftCircle } from 'react-icons/fi'

import api from '../../services/api';

import './styles.css'

// import { Container } from './styles';

export default function Details() {
  const [detail, setDetail] = useState({});
  const {id} = useParams();
  console.log(detail)
  

  useEffect(() => {
    api.get(`details/${id}`)
    .then(response => {
      setDetail(response.data)
    })
  }, [id]);


  
  return (
    <div className="detail-container">
      <header>
        <Link className="arrow" to="/games">
          <FiArrowLeftCircle size={50} color="#3F88C5" />
        </Link>
        <Link className="button" to={`/details/edit/${id}`}>Editar jogo</Link>
      </header>
      <div className="content">
        <section className="image">
          <img src={detail.photo} alt=""/>
        </section>
        <section className="information">
          <strong>Nome:</strong>
          <p>{detail.title}</p>

          <strong>Descrição:</strong>
          <p>{detail.description}</p>

          <strong>Desenvolvido por:</strong>
          <p>{detail.developer}</p>

        </section>
      </div>

    </div>
  );
}
