import logo from './logo.svg';
import './App.css';
import { useGetCharacters } from './hooks/useGetCharacters'
import { CharactersContainer } from './containers/CharactersContainer';
import { Characters } from './components/Characters.jsx'
import { CharacterCard } from './components/CharacterCard';
import { Header } from './components/Header/Header'

function App() {
  const {
    characters,
    searchCharacter,
    setSearchCharacter,
    searchedValue,
  } = useGetCharacters()
  return (
    <>
      <Header
        searchCharacter={searchCharacter}
        setSearchCharacter={setSearchCharacter}
      />
      <Characters
        characters={characters}
        searchCharacter={searchCharacter}
        searchedValue={searchedValue}
        render = {character => (
          <CharacterCard 
            key={character.id}
            name={character.name}
            image={character.image}
            status={character.status}
            species={character.species}
            location={character.location}
          />
        )}
        >
      </Characters>
    </>
  );
}
export default App
