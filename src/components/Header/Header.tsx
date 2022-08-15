import React, { useRef } from "react";
import { useDarkMode } from '../../hooks/useDarkMode.js'
import Logo from './logo.png'
import { Link } from "react-router-dom";

function Header() {
  const [colorTheme, setTheme] = useDarkMode()
  const searchInput = React.useRef(null)
  const burgerIcon = useRef(null)

  const handleClick = () => {
    console.log("click")
    burgerIcon.current.classList.toggle('hidden')
  }

  // const onSearch = () => {
  //     setSearchCharacter(searchInput.current.value)
  // }
  // const onSearch = React.useCallback(() => {
  //   setSearchCharacter(searchInput.current.value)
  // }, [])

  return (
    <header className="sm:px-4 py-2.5 dark:bg-slate-800 transition duration-300">
      <div className="container flex flex-wrap justify-between items-center mx-auto px-4 md:px-0"> 
        <Link to='/'>
          <img className="w-48" src={Logo} alt="Logo" />
        </Link>
        <div>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={handleClick}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          <button
            className="md:hidden pl-1 dark:hover:bg-gray-700"
            onClick={() => setTheme(colorTheme)}
          >{colorTheme === 'dark' ?
            <svg className="w-6 h-6 dark:bg-slate-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg> :
            <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" color="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>}
          </button>
        </div>
        <div className="hidden w-full md:block md:w-auto" ref={burgerIcon}>
          <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <Link to='/play'>
              <span className="block py-2 pr-4 pl-3 text-gray-700 text-xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={handleClick}>Memory Game</span>
            </Link>
            <Link to='/episodes'>
              <span className="block py-2 pr-4 pl-3 text-gray-700 text-xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={handleClick}>Episodes</span>
            </Link>

          <button
          className="hidden md:block"
          onClick={() => setTheme(colorTheme)}
        >{colorTheme === 'dark' ?
          <svg className="w-6 h-6 dark:bg-slate-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg> :
          <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" color="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>}
        </button>
          </ul>
        </div>
      </div>
    </header>
  )
}

export { Header }