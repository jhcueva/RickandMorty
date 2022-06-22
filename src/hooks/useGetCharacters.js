import React from "react";

function useGetCharacters () {
    const [characters, setCharacters] = React.useState([])
    const [searchCharacter, setSearchCharacter] = React.useState('')

    // const searchedValue = characters.filter((user) => {
    //         return user.name.toLowerCase().includes(searchCharacter.toLowerCase())
    //     })

    const searchedValue = React.useMemo(() => 
        characters.filter((user) => {
            return user.name.toLowerCase().includes(searchCharacter.toLowerCase())
        }),
        [characters, searchCharacter]
        
    )


    React.useEffect(() => {
        async function getCharacter () {
            const response = await fetch('https://rickandmortyapi.com/api/character')
            const data = await response.json()
            setCharacters(data.results)
        }
        try {
            getCharacter()
        }
        catch (err) {
            console.log("Error", err)
        }
    }, [])

    console.log(characters)

    return {
        characters,
        searchCharacter,
        setSearchCharacter,
        searchedValue,

    }
}

export { useGetCharacters }