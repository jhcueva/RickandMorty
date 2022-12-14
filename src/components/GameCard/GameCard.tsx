import React from 'react'
import Portal from './portal.png'

export const GameCard = ({ card, id, handleChoice, flipped, disabled }) => {
  const handleCLick = () => {
    if (!disabled) {
      handleChoice(card)
    }
  }

  return (
    <div className='card' key={id}>
      <div className={flipped ? "flipped" : ""}>
        <img className='front object-cover w-96 h-full' src={card.img} alt='cardFront' />
        <img
          className={`back object-cover w-96 h-full ${!disabled && 'hover:cursor-pointer'}`} onClick={handleCLick} src={Portal} alt='cardBack' />
      </div>
    </div>
  )
}
