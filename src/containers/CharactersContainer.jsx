import React from "react";

function CharactersContainer ({ children}) {
    return (
        <section className="mx-none dark:bg-gray-500 transition duration-300">
            {children}
        </section>
    )
}

export { CharactersContainer }