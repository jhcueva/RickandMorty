import React, { useState, useEffect, useReducer } from 'react'
import { getRandomCharacters } from '../../hooks/useGetData'
import { GameCard } from '../GameCard/GameCard'
// import {actionTypes, InitialState, actions} from './models'

enum actionTypes {
  CARD_IMAGE,
  CARD,
  SHUFFLE_CARD,
  CHOICE_ONE,
  CHOICE_TWO,
  RESET_TURN,
  DISABLED,
  NEW_GAME,
}

interface InitialState {
  cardImages: CardAPI[]
  cards: Card[]
  turns: number
  choiceOne: Card | null
  choiceTwo: Card | null
  disabled: boolean
  newGame: boolean
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

type actions = actionCardImage | actionShuffleCard | actionCard | actionChoiceOne | actionChoiceTwo | actionResetTurn | actionDisable | actionsNewGame

interface actionCardImage {
  type: actionTypes.CARD_IMAGE
  payload: CardAPI[]
}

interface actionShuffleCard {
  type: actionTypes.SHUFFLE_CARD
  payload: Card[]
}

interface actionCard {
  type: actionTypes.CARD
}

interface actionChoiceOne {
  type: actionTypes.CHOICE_ONE
  payload: Card
}

interface actionChoiceTwo {
  type: actionTypes.CHOICE_TWO
  payload: Card
}

interface actionResetTurn {
  type: actionTypes.RESET_TURN
}

interface actionDisable {
  type: actionTypes.DISABLED
}

interface actionsNewGame {
  type: actionTypes.NEW_GAME
}

export const MemoryGame = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const onCardImage = (cardAPI) => dispatch({type: actionTypes.CARD_IMAGE, payload: cardAPI})
  const onShuffleCard = (card) => dispatch({ type: actionTypes.SHUFFLE_CARD, payload: card})
  const onCard = () => {
    dispatch({ type: actionTypes.CARD })

  }
  const onChoiceOne = (cardInfo) => dispatch({ type: actionTypes.CHOICE_ONE, payload: cardInfo})
  const onChoiceTwo = (cardInfo) => dispatch({ type: actionTypes.CHOICE_TWO, payload: cardInfo})
  const onResetTurn = () => dispatch({ type: actionTypes.RESET_TURN })
  const onDisable = () => dispatch({ type: actionTypes.DISABLED})
  const onNewGame = () => dispatch({ type: actionTypes.NEW_GAME})

  const {
    cardImages,
    cards,
    choiceOne,
    choiceTwo,
    turns,
    disabled,
    newGame,
  } = state


  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({  ...card, id: Math.random() }))

    onShuffleCard(shuffledCards)
  }

  const handleChoice = (card) => {
    choiceOne ? onChoiceTwo(card) : onChoiceOne(card)
  }

  const handleNewGame = () => {
    onNewGame()
  }

  const resetTurn = () => {
    onResetTurn()
  }

  useEffect(() => {
    try {
      getRandomCharacters(8)
        .then(response => response.map(character => 
          ({ img: character.image, matched: false }))
          )
        .then(onCardImage)
        .then(() => shuffleCards())
    } catch (err) {
      console.log("Error: ", err)
    }
  }, [newGame])

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      onDisable()
      if(choiceOne.img === choiceTwo.img) {
        try{
          onCard()
          resetTurn()
        } catch (err) {
          console.log("Error sameCards: ", err)
        }
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

const initialState: InitialState = {
  cardImages: [],
  cards: [],
  turns: 0,
  choiceOne: null,
  choiceTwo: null,
  disabled: false,
  newGame: false,
}

const reducer = (state = initialState, action: actions) => {
  switch (action.type) {
    case actionTypes.CARD_IMAGE:
      return {
        ...state,
        cardImages: action.payload
      }
    case actionTypes.CARD:
      return {
        ...state,
        cards: state.cards.map(card => {
          if (card.img === state.choiceOne.img) {
            return { ...card, matched: true}
          } else {
            return card
          }
        })
      }
    case actionTypes.SHUFFLE_CARD: 
      return {
        ...state,
        choiceOne: null,
        choiceTwo: null,
        cards: action.payload,
        newGame: true,
        turns: 0
      }
    case actionTypes.CHOICE_ONE:
      return {
        ...state,
        choiceOne: action.payload
      }
    case actionTypes.CHOICE_TWO:
      return {
        ...state,
        choiceTwo: action.payload
      }
    case actionTypes.RESET_TURN:
      return {
        ...state,
        choiceOne: null,
        choiceTwo: null,
        turns: state.turns + 1,
        disabled: false
      }
    case actionTypes.DISABLED:
      return {
        ...state,
        disabled: true
      }
    case actionTypes.NEW_GAME:
      return {
        ...state,
        newGame: !state.newGame
      }
  }
}