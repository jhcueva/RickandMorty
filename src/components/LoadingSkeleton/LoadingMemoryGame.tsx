import React from 'react'
import Portal from './portal.png'


export const LoadingMemoryGame = () => {
  return (
    <>
      {Array(16).fill(null).map(box => <img src={Portal} alt='PortalImage'/>)}
    </>
  )
}
