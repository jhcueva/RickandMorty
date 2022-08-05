import React from 'react'
import { useGetCharacters } from '../hooks/useGetCharacters'
import { GlobalContainer } from '../containers/GlobalContainer.jsx'
import { Characters } from '../components/Characters.jsx'
import { CharacterCard } from '../components/CharacterCard';


export const Home = () => {
  const {
    randomCharacters,
  } = useGetCharacters()
  return (
    <GlobalContainer>
      <Characters
        randomCharacters={randomCharacters}
        // searchCharacter={searchCharacter}
        // searchedValue={searchedValue}
        render={randomCharacter => (
          <CharacterCard
            id={randomCharacter.id}
            name={randomCharacter.name}
            image={randomCharacter.image}
            status={randomCharacter.status}
            species={randomCharacter.species}
            location={randomCharacter.location}
          />
        )}
      >
      </Characters>
    </GlobalContainer>
  )
}
