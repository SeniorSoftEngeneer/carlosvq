import { useState, useEffect } from "react";

import { API_URL } from "../constants";

export const useRickAndMortyAPI = () => {
    const [characters, setcharacters] = useState([])
    const [info, setInfo] = useState({}) // new code

    const makeHTTPRequest = (url) => {
      fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setcharacters(data.results)
        setInfo(data.info) // new code
      })
      .catch((err) => { console.log(err) })
    }

    const onPrevious = () => makeHTTPRequest(info.prev)

    const onNext = () => makeHTTPRequest(info.next)


    useEffect(() => {
      makeHTTPRequest(API_URL)
    }, [])

  return {
    onPrevious,
    onNext,
    characters,
    info
  };

}
