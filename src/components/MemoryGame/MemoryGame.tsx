import React, { useState, useEffect } from 'react'
import { getRandomCharacters } from '../../hooks/useGetData'
import { GameCard } from '../GameCard/GameCard'

export const MemoryGame = () => {
  const [cardImages, setCardImage] = useState([])
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)


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

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  useEffect(() => {
    try {
      getRandomCharacters(8)
        .then(response => response.map(character => ({ img: character.image, matched: false })))
        .then(setCardImage)
    } catch (err) {
      console.log("Error: ", err)
    }
  }, [])

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
    <div className='container mx-auto flex flex-col'>
      <button onClick={shuffleCards} className='dark:text-white'>New Game</button>
      <div className='grid grid-cols-4 gap-4'>
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
      <p className='dark:text-white'>Turns: {turns}</p>
    </div>
  )
}
