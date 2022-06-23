import React from 'react';
import { Link } from 'react-router-dom';

export default function EndangeredList({ animals }) {
  return (
    <div className='animal-list'>
      {
        animals.map((animal, i) =>
          <Link key={animals.common_name + i + animals.id} to={`/animals/${animals.id}`}>
            <div className='danger'>
              <h3>{animal.common_name}</h3>
              <p>{animal.Order}</p>
              <p>{animal.date_extinction}</p>
              <p>{animal.former_range}</p>
            </div>
          </Link>)
      }
    </div>
  );
}
