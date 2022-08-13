import React from "react";
import { useDarkMode } from '../../hooks/useDarkMode.js'
import Logo from './logo.png'
import { Link } from "react-router-dom";

function Header() {
  const [colorTheme, setTheme] = useDarkMode()
  const searchInput = React.useRef(null)

  // const onSearch = () => {
  //     setSearchCharacter(searchInput.current.value)
  // }
  // const onSearch = React.useCallback(() => {
  //   setSearchCharacter(searchInput.current.value)
  // }, [])

  return (
    <header className="header flex h-24 justify-between items-center px-4 dark:bg-slate-800 transition duration-300">
      <Link to='/'>
        <img className="w-48" src={Logo} alt="Logo" />
      </Link>
      <div className="flex items-center gap-3">
        <Link to='/play'>
          <span className="dark:text-white text-xl">Memory Game</span>
        </Link>
        <Link to='/episodes'>
          <span className="dark:text-white text-xl">Episodes</span>
        </Link>
        {/* <input
          className="rounded p-2 bg-slate-100 dark:bg-slate-50"
          placeholder="Search"
          type="text"
          // value={searchCharacter}
          // onChange={onSearch}
          ref={searchInput}
        /> */}
        <button
          onClick={() => setTheme(colorTheme)}
        >{colorTheme === 'dark' ?
          <svg className="w-6 h-6 dark:bg-slate-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg> :
          <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" color="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>}
        </button>
      </div>
    </header>
  )
}

export { Header }