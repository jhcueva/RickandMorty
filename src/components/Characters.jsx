import React from "react";
import { LoadingCharacterCard } from './LoadingCharacterCard/LoadingCharacterCard'


function Characters(props) {
  console.log(props.randomCharacters.length)
  return (
    <>
      <section className="container mx-auto flex flex-wrap justify-center py-6">
        {props.randomCharacters.length === 0 
          ? Array(8).fill(<LoadingCharacterCard/>)
          : props.randomCharacters.map(props.render)
        }
      </section>
    </>
  );
}

export { Characters };
