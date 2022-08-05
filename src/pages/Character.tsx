import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContainer } from '../containers/GlobalContainer.jsx'
import { getSingleCharacter } from '../hooks/useGetData'
import { SingleCharacter } from '../components/SingleCharacter/SingleCharacter'
import { CharacterResponseAPI} from '../types'
import { LoadingSingleCharacter } from '../components/LoadingSkeleton/LoadingSingleCharacter'

const SingleCharacterData = {
  id: 0,
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  origin: {
    name: '',
    url: ''
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


export const Character = () => {
  let { characterId } = useParams()
  const [singleCharacter, setSingleCharacter] = useState<CharacterResponseAPI>(SingleCharacterData)
  console.log(typeof singleCharacter)
  try {
    console.log(singleCharacter.location.name)
  } catch (err) {
    console.error("Error single character location", err)
  }

  useEffect(() => {
    try {
      getSingleCharacter(characterId)
        .then(setSingleCharacter)
    } catch (err) {
      console.log("Error:", err)
    }
  }, [])

  console.log(singleCharacter)

  return (
    <GlobalContainer>
      {
        singleCharacter.name.length === 0
        ? <LoadingSingleCharacter/>
        : <SingleCharacter {...singleCharacter} />
      }
    </GlobalContainer>
  )
}
