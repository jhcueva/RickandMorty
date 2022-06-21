import React from "react";

function Characters () {
    const [characters, setCharacters] = React.useState([])

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
    return (
        <section className="character flex flex-wrap justify-center my-6">
        {characters.map(character => (
            <section className="characterCard shadow-lg rounded-md m-5" key={character.id}>
                <section className="w-full h-3/5">
                    <img src={character.image} className="rounded-t-lg object-cover w-full h-full"/>
                </section>
                <section className="w-full h-1/5 py-3 px-2">
                    <h2 className="text-2xl">{character.name}</h2>
                    <p>{character.status} - {character.species}</p>
                    <p>Last known location:</p>
                    <h3 className="text-lg">{character.location.name}</h3>
                </section>
            </section>
        ))}
        </section>
    )
}

export { Characters }