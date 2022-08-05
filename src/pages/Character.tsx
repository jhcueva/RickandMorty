import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContainer } from '../containers/GlobalContainer.jsx'
import { getSingleCharacter } from '../hooks/useGetData'
import { SingleCharacter } from '../components/SingleCharacter/SingleCharacter'
import { CharacterResponseAPI } from '../types.js'


export const Character = () => {
  let { characterId } = useParams()
  const [singleCharacter, setSingleCharacter] = useState<CharacterResponseAPI>([])
  console.log(typeof singleCharacter)

  useEffect(() => {
    try {
      getSingleCharacter(characterId)
        .then(response => console.log(response))
        // .then(setSingleCharacter)
    } catch(err) {
      console.log("Error:", err)
    }
  }, [])

  console.log(singleCharacter)

  return (
    <GlobalContainer>
      <SingleCharacter
        name={singleCharacter.name}
        image={singleCharacter.image}
        status={singleCharacter.status}
        species={singleCharacter.species}
      />
    </GlobalContainer>
  )
}
