import {CharacterResponseAPI, EpisodesResponseAPI} from '../types'
const API_HOST = `https://rickandmortyapi.com/api`
const API_CHARACTERS = `${API_HOST}/character`
const API_EPISODES = `${API_HOST}/episode`

const randomArray = (length, max) => Array(length).fill(null).map(() => (Math.round(Math.random() * max) + 1))

export const getRandomCharacters = async (numberCharacters): Promise<CharacterResponseAPI[]> => {
  const response = await fetch(`${API_CHARACTERS}/${randomArray(numberCharacters, 826)}`);
  const data = await response.json();
  return data
}

export const getSingleCharacter = async (characterId):Promise<CharacterResponseAPI> => {
  const response = await fetch(`${API_CHARACTERS}/${characterId}`);
  const singleCharacter = await response.json();
  return singleCharacter
}

export const getMultipleCharacters = async (charactersArr) => {
  const response = await fetch(`${API_CHARACTERS}/${charactersArr}`)
  const multipleCharacters = await response.json()
  return multipleCharacters
}


export const getAllEpisodes = async () => {
  const response = await Promise.all(
    Array.from(
      {length: 3}, 
      (_, i) => fetch(`${API_EPISODES}?page=${i+1}`).then(response => response.json())
      )
    )
  const episodesArr: EpisodesResponseAPI[] = response.map(episode => episode.results).flat()
  return episodesArr.flat()
}


export const getSingleEpisode = async (episodeId) => {
  const response = await fetch(`${API_EPISODES}/${episodeId}`)
  const episode = await response.json()
  return episode
}