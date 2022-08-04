import React from "react";

function CharacterCard(props) {
    return (
        <article 
            className="characterCard shadow-lg w-70 sm:flex sm:w-5/6 md:w-3/5 lg:w-1/3 lg:h-48 rounded-md m-5 dark:text-white dark:bg-gray-700" 
            key={props.id}>
            <section className="w-full h-3/5 sm:h-full sm:w-3/5">
                <img 
                    src={props.image} 
                    className="rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none object-cover w-full h-full"
                    alt={props.name}/>
            </section>
            <section 
                className="flex flex-col w-full h-1/5 sm:h-full sm:justify-between py-4 px-2"
                >
                <div className="name">
                    <h2 
                        className="text-3xl text-bold">{props.name}</h2>
                    <p>
                    {props.status} - {props.species}
                    </p>
                </div>
                <div className="lastSeen">
                    <p className="text-gray-400">Last known location:</p>
                    <h3 className="text-xl">{props.location.name}</h3>
                </div>
            </section>
        </article>
    )
}

export { CharacterCard}