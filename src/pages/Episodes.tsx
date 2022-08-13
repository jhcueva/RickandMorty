import React, { useEffect, useState } from 'react'
import { GlobalContainer } from '../containers/GlobalContainer'
import { Layout } from '../components/Layout/index'
import { getAllEpisodes, getMultipleCharacters } from '../hooks/useGetData'
import { EpisodesResponseAPI, SingleEpisodeResponse } from '../types'
import { Characters } from '../components/Characters'
import { CharacterCard } from '../components/CharacterCard';

const episodesInfo = {
  id: 0,
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  origin: {
    name: '',
    url: '',
  },
  location: {
    name: '',
    url: '',
  },
  image: '',
  episode: [],
  url: '',
  created: new Date(),
}

const episodeInfo = {
  id: 0,
  name: '',
  air_date: '',
  episode: '',
  characters: [],
  url: '',
  created: new Date(),
}

export const Episodes = () => {
  const [listEpisodes, setListEpisodes] = useState([episodesInfo])
  const [episode, setEpisode] = useState(episodeInfo)
  const [episodeId, setEpisodeId] = useState(0)
  const [episodeCharacters, setEpisodeCharacters] = useState([])

  const handleSelectedEpisode = (event) => {
    setEpisodeId(event.target.value)

  }

  useEffect(() => {
    try {
      getAllEpisodes()
        .then(setListEpisodes)
      getAllEpisodes()
        .then(response => setEpisode(response[0] as unknown as SingleEpisodeResponse))
    } catch (err) {
      console.log("Error: ", err)
    }
  }, [])

  useEffect(() => {
    console.log(episodeId)
    if (episode['name']){
      setEpisode(listEpisodes[episodeId] as unknown as SingleEpisodeResponse)
    }
  }, [episodeId])


  useEffect(() => {
    if (episode["characters"]) {
      const charactersId = episode['characters'].map(episode => episode.split('/').pop())
      try {
        getMultipleCharacters(charactersId)
          .then(setEpisodeCharacters)
      } catch (err) {
        console.log("Error: ", err)
      }
    }
  }, [episode])

  return (
    <GlobalContainer>
      <Layout title='Episode' />
      <section className='pt-7'>
        <section className='container mx-auto flex flex-col items-center gap-3'>
          <h3 className='text-3xl sm:text-4xl text-center dark:text-white'>Episode name: <span className='text-blue-500'>{episode.name}</span></h3>
          <h4 className='text-2xl dark:text-white'>Air date: {episode.air_date}</h4>
          <p className='text-xl dark:text-white'>Pick an episode</p>
          <select className='selectEpisode bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={handleSelectedEpisode}>
            <option value={0}>Choose an episode</option>
            {
              listEpisodes.map(episode =>
                <option key={episode.id} value={episode.id - 1}>E{episode.id} - {episode?.name}</option>)
            }
          </select>
        </section>
        <>
          {
            episodeCharacters.length > 0
            ? <Characters
                characters={episodeCharacters}
                render={randomCharacter => (
                  <CharacterCard
                    id={randomCharacter.id}
                    name={randomCharacter.name}
                    image={randomCharacter.image}
                    status={randomCharacter.status}
                    species={randomCharacter.species}
                    location={randomCharacter.location}
                  />
                  )
                }
              />
            : null
          }
        </>
      </section>
    </GlobalContainer>
  )
}
