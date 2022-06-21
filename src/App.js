import logo from './logo.svg';
import './App.css';
import { CharactersContainer } from './containers/CharactersContainer';
import { Characters } from './components/Characters.jsx'

function App() {
  return (
      <CharactersContainer>
        <Characters/>
      </CharactersContainer>
  );
}
export default App
