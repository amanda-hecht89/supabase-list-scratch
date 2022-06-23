import { client } from './client';

export async function getAnimalsAndCount(from, to) {
  const response = await client.from('endangeredAnimals').select('*', { count: 'exact' }).range(from, to);
  return response;
}

export async function getAnimalById(id) {
  const response = await client.from('endangeredAnimals').select('*').match({ id }).single();
  return response.data;
}
