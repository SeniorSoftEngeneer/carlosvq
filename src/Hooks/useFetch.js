import { useState, useEffect } from "react";

export const useFetch = (url) => {

    const [charaters, setCharaters] = useState([])
    const [info, setInfo] = useState({}) // new code
    const API = `https://rickandmortyapi.com/api/character/`;

    const makeHTTPRequest = (url) => {
      fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharaters(data.results)
        setInfo(data.info) // new code
        console.log(info)
      })
      .catch((err) => {console.log(err)})
    }

    useEffect(() => {
       makeHTTPRequest(API)
    }, [url])

  return charaters;
    
}
