import React from "react";
import { LoadingCharacterCard } from './LoadingSkeleton/LoadingCharacterCard'


function Characters(props) {
  return (
    <>
      <section className="container mx-auto flex flex-wrap justify-center py-6">
        {props.characters.length === 0
          ? Array(8).fill(<LoadingCharacterCard/>)
          : props.characters?.map(props.render)
          // : console.log(props.characters)
        }
      </section>
    </>
  );
}

export { Characters };
