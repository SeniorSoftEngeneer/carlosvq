import React from "react"

import { useRickAndMortyAPI } from "../Hooks/useRickAndMortyAPI";

import { Pages } from "./Pages";
import { ShowDataScreen } from "./ShowDataScreen";


export const MostrarAPI = (url) => {
  const { info, characters, onPrevious, onNext } = useRickAndMortyAPI()

  return (
    <>
      <h1>Rick and Morthy</h1>
      <Pages
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
      <div className="rick-and-morthy">
        <ShowDataScreen  character={characters}/>
      </div>
    </>
  );
};
