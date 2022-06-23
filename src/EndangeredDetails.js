import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAnimalById } from './services/Fetch-Utils';


export default function EndangeredDetails() {
  const params = useParams();
  const [endangered, setEndangered] = useState({});

  useEffect(() => {
    async function fetch() {
      const data = await getAnimalById(params.id);
      setEndangered(data);
    }
    fetch();
  }, [params.id]);

  return (
    <div className='animal-detail'>
      <h2>{endangered}</h2>
      <a href={endangered.link} target="_blank" rel="noreferrer">ENTRY</a>
      <p>{endangered}</p>
    </div>
  );
}
