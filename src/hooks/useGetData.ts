import {CharacterResponseAPI} from '../types'
const API_HOST = `https://rickandmortyapi.com/api`
const API_CHARACTERS = `${API_HOST}/character`

const randomArray = (length, max) => Array(length).fill(null).map(() => (Math.round(Math.random() * max) + 1))

export const getRandomCharacters = async (): Promise<CharacterResponseAPI[]> => {
  const response = await fetch(`${API_CHARACTERS}/${randomArray(8, 826)}`);
  const data = await response.json();
  return data
}

export const getSingleCharacter = async (characterId):Promise<CharacterResponseAPI> => {
  const response = await fetch(`${API_CHARACTERS}/${characterId}`);
  const data = await response.json();
  return data
}

