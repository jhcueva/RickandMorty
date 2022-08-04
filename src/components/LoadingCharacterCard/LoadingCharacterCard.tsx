import React from 'react'

export const LoadingCharacterCard = () => {
  return (
    <div
      className="loadingCharacterCard shadow-lg w-70 sm:flex sm:w-5/6 md:w-3/5 lg:w-1/3 lg:h-48 rounded-md m-5 dark:bg-gray-700">
      <div className="bg-slate-200 w-full h-3/5 sm:h-full sm:w-3/5 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none" >
        <div className='w-full h-full'/>
      </div>
      <div className="flex flex-col w-full h-1/5 sm:h-48 sm:justify-between py-4 px-2">
        <div>
          <div className="bg-slate-50 w-48 h-7 my-2"></div>
          <div className="bg-slate-50 w-28 h-4 my-2"></div>
        </div>
        <div>
          <div className="bg-slate-50 w-32 h-4 my-2"></div>
          <div className="bg-slate-50 w-28 h-3 my-2"></div>
        </div>
      </div>
    </div>
  )
}
