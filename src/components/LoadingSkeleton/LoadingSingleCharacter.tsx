import React from 'react'

export const LoadingSingleCharacter = () => {
  return (
    <div className='container animate-pulse mx-auto py-9 grid grid-cols-1 place-items-center'>
      <article
        className="shadow-lg w-3/4 h-4/6 lg:h-full sm:flex mt-5"
      >
        <section className="bg-slate-400 w-full h-80 lg:h-96 rounded-md">
        </section>
        <section className="flex flex-col w-full h-full sm:justify-between sm:px-6 text-white">
          <div className="name">
            <div className="bg-slate-400 w-52 h-14 my-4"></div>
            <div className="bg-slate-400 w-32 h-4 my-3"></div>
            <div className="bg-slate-400 w-32 h-4 my-3"></div>
            <div className="bg-slate-400 w-32 h-4 my-3"></div>
          </div>
          <div className="lastSeen mt-3">
            <div className="bg-slate-400 w-48 h-7 my-2"></div>
            <div className="bg-slate-400 w-28 h-4 my-2"></div>
          </div>
        </section>
      </article>
    </div>
  )
}
