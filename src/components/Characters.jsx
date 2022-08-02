import React from "react";

const initialState = {
    favorites: [],
}
const actionTypes = {
    add_favorites: 'ADD_FAVORITES',
}

const reducerObject = (state, payload) => ({
    [actionTypes.add_favorites]: {
        ...state,
        favorites: [...state.favorites, payload]
    }
})

const favoriteReducer = (state, action) => {
    if(reducerObject(state)[action.type]) {
        return reducerObject(state, action.payload)[action.type]
    } else {
        return state
    }
}

function Characters (props) {
    return (
        <>
        {props.searchCharacter.length !== 0 ? 
            <section
                className="flex flex-wrap justify-center py-6 dark:bg-slate-900"
                >
                {props.searchedValue.map(character => (
                        <article 
                            className="shadow-lg w-48 h-64 rounded-lg m-5 hover:scale-105 transform duration-300 dark:text-white dark:bg-gray-700" 
                            key={character.id}>
                            <section className="w-full h-3/5">
                                <img 
                                    src={character.image} 
                                    className="rounded-t-lg object-cover w-full h-full"/>
                            </section>
                            <section 
                                className="flex justify-center items-center w-full h-2/5"
                                >
                                <h2 
                                className="text-2xl text-bold text-center">{character.name}</h2>
                            </section>
                        </article>
                ))}
            </section>
            : null
        }
        <section
            className="flex flex-wrap justify-center py-6 dark:bg-slate-900">


            {props.characters.map(props.render)}
            {props.children}
        </section>
        </>
    )
}

export { Characters }