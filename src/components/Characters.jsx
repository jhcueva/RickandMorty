import React from "react";
import { LoadingCharacterCard } from './LoadingCharacterCard/LoadingCharacterCard'


function Characters(props) {
  return (
    <>
      <section className="container mx-auto flex flex-wrap justify-center py-6">
        {console.log("randomCharacters from Characters: ",props.randomCharacters)}
        {props.randomCharacters.map(props.render)}
        {props.children}
        <LoadingCharacterCard />
      </section>
    </>
  );
}

export { Characters };
