import React from 'react'
import { CharacterResponseAPI} from '../../types'


export const SingleCharacter = (props: CharacterResponseAPI) => {
  return (
    <div className='container mx-auto py-9 grid grid-cols-1 place-items-center'>
      <article
        className="shadow-lg w-3/4 sm:flex mt-5"
      >
        <section className="w-full">
            <img
              src={props.image}
              className="rounded-md object-cover w-full h-full"
              alt={props.name}
            />
        </section>
        <section className="flex flex-col w-full h-full sm:justify-between sm:px-6 dark:text-white">
          <div className="name">
            <h2 className="text-5xl text-bold py-4">{props.name}</h2>
            <p className='text-xl'>
              {props.status} - {props.species}
            </p>

            <p className='text-xl'>
              Gender: {props.gender}
            </p>
            <p className='text-xl'>
              Episodes: {props.episode.length}
            </p>
          </div>
          <div className="lastSeen mt-3">
            <p className="text-gray-400 text-2xl">Last known location:</p>
            <p className='text-xl'> {props.location.name} </p>
          </div>
        </section>
      </article>
    </div>
  )
}
