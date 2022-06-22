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
            props.searchedValue.map(character => (
                <h2 key={character.id}>{character.name}</h2>
            ))
            : null
        }
        <section
            className="characters flex flex-wrap justify-center py-6 dark:bg-slate-900">
            {props.characters.map(props.render)}
            {props.children}
        </section>
        </>
    )
}

export { Characters }