import './App.css';
import { useGetCharacters } from './hooks/useGetCharacters'
import { MainContainer } from './containers/MainContainer';
import { Characters } from './components/Characters.jsx'
import { CharacterCard } from './components/CharacterCard';
import { Header } from './components/Header/Header'

function App() {
  const {
    loading,
    randomCharacters,
  } = useGetCharacters()
  return (
    <>
      <Header
        // searchCharacter={searchCharacter}
        // setSearchCharacter={setSearchCharacter}
      />
      <MainContainer>
        <Characters
          loading={loading}
          randomCharacters={randomCharacters}
          // searchCharacter={searchCharacter}
          // searchedValue={searchedValue}
          render = {randomCharacter => (
            <CharacterCard 
              key={randomCharacter.id}
              name={randomCharacter.name}
              image={randomCharacter.image}
              status={randomCharacter.status}
              species={randomCharacter.species}
              location={randomCharacter.location}
            />
          )}
          >
        </Characters>
      </MainContainer>
    </>
  );
}
export default App
