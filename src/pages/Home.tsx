import React from 'react'
import { useGetCharacters } from '../hooks/useGetCharacters'
import { GlobalContainer } from '../containers/GlobalContainer.jsx'
import { Characters } from '../components/Characters.jsx'
import { CharacterCard } from '../components/CharacterCard';
import { Layout } from '../components/Layout';

export const Home = () => {
  const {
    randomCharacters,
  } = useGetCharacters()
  return (
    <GlobalContainer>
      <Layout subTitle='Your favorite web from your favorite show'/>
      <Characters
        characters={randomCharacters}
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
      />
    </GlobalContainer>
  )
}
