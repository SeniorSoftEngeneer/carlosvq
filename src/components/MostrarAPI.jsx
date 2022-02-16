import { useState, useEffect} from "react"
import { Pages } from "./Pages";
import { ShowDataScreen } from "./ShowDataScreen";


export const MostrarAPI = (url) => {

    const [charaters, setCharaters] = useState([])
    const [info, setInfo] = useState({}) // new code
    const API = `https://rickandmortyapi.com/api/character/`;

    const makeHTTPRequest = (url) => {
      fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharaters(data.results)
        setInfo(data.info) // new code
        // console.log(info)
      })
      .catch((err) => {console.log(err)})
    }

    const onPrevious = () => {
      makeHTTPRequest(info.prev)
    }
    
    const onNext = () => {
      makeHTTPRequest(info.next)

    }

    useEffect(() => {
       makeHTTPRequest(API)
    }, [url])

  return (
    <>
      <h1>Rick and Morthy</h1>
        <Pages prev={info.prev} next={info.next}  onPrevious={onPrevious} onNext={onNext}/>
      <div className="rick-and-morthy">
        <ShowDataScreen  charater={charaters}/>
      </div>
    </>
  );
};
