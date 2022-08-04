import React, { useState } from "react";
import { getRandomCharacters } from './useGetData'


function useGetCharacters() {
  const [randomCharacters, setRandomCharacters] = useState([]);
  // const [searchCharacter, setSearchCharacter] = React.useState("");

  // const searchedValue = React.useMemo(
  //   () =>
  //     randomCharacters.filter((user) => {
  //       return user.name.toLowerCase().includes(searchCharacter.toLowerCase());
  //     }),
  //   [randomCharacters, searchCharacter]
  // );

  React.useEffect(() => {
    try {
      getRandomCharacters()
        .then(setRandomCharacters)
    } catch (err) {
      console.log("Error", err);
    }
  }, []);

  return {
    randomCharacters,
  };
}

export { useGetCharacters };
