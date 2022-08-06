import React, { useState, useEffect, useReducer } from 'react'
import { getRandomCharacters } from '../../hooks/useGetData'
import { GameCard } from '../GameCard/GameCard'

enum actionTypes {
  CARD_IMAGE,
  SHUFFLE_CARD,
}

interface CardAPI {
  img: string,
  matched: boolean
}

interface Card {
  img: string,
  matched: boolean
  id: number
}

interface actionCardImage {
  type: actionTypes.CARD_IMAGE
  payload: CardAPI[]
}

interface actionShuffleCard {
  type: actionTypes.SHUFFLE_CARD
  payload: Card[]
}

export const MemoryGame = () => {
  // const [cardImages, setCardImage] = useState([])
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [newGame, setNewGame] = useState(false)

  const [state, dispatch] = useReducer(reducer, initialState)

  const onCardImage = (cardAPI) => dispatch({type: actionTypes.CARD_IMAGE, payload: cardAPI})

  const {
    cardImages,
  } = state


  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({  ...card, id: Math.random() }))

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
  }

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  const handleNewGame = () => {
    setNewGame(true)
  }

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  useEffect(() => {
    try {
      getRandomCharacters(8)
        .then(response => response.map(character => 
          ({ img: character.image, matched: false }))
          )
        .then(onCardImage)
      shuffleCards()
      setNewGame(false)
    } catch (err) {
      console.log("Error: ", err)
    }
  }, [newGame])

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if(choiceOne.img === choiceTwo.img) {
        setCards(prevCard => {
          return prevCard.map(card => {
            if (card.img === choiceOne.img) {
              return { ...card, matched: true}
            } else {
              return card
            }
          }
          )
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 700)
      }
    }
  }, [choiceOne, choiceTwo])

  return (
    <div className='container mx-auto flex flex-col items-center lg:px-80'>
      <button type="button" onClick={handleNewGame} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 text-lg font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">New Game</button>
      <div className='grid grid-cols-4 gap-4 my-10'>
        {
          cards.map(card => 
            <GameCard 
              card={card} 
              id={card.id} 
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          )
        }
      </div>
      <span className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Turns: {turns}</span>
    </div>
  )
}

const initialState = {
  cardImages: [],
  card: [],
  choiceOne: null,
  choiceTwo: null,
}

const reducer = (state, action: actionCardImage | actionShuffleCard) => {
  switch (action.type) {
    case actionTypes.CARD_IMAGE:
      return {
        ...state,
        cardImages: action.payload
      }
    case actionTypes.SHUFFLE_CARD: 
      return {
        ...state,

      }
  }

}