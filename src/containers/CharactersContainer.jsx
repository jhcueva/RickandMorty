import React from "react";

function CharactersContainer ({ children}) {
    return (
        <section className="container mx-auto">
            {children}
        </section>
    )
}

export { CharactersContainer }