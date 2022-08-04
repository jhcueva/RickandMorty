import React, { useState } from "react";
import { getRandomCharacters } from './useGetData'


function useGetCharacters() {
  const [randomCharacters, setRandomCharacters] = useState([]);
  const [loading, setLoading] = useState(false)
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
      setLoading(true)
      getRandomCharacters()
        .then(setRandomCharacters)
      setLoading(false)
    } catch (err) {
      console.log("Error", err);
    }
  }, []);

  return {
    loading,
    randomCharacters,
  };
}

export { useGetCharacters };
