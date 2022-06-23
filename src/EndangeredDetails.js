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
      <h2>{endangered.common_name}</h2>
      <p>{endangered.Order}</p>
      <p>{endangered.date_extinction}</p>
      <p>{endangered.former_range}</p>
    </div>
  );
}
