import React , {useState , createContext} from 'react';

export const CovidContext =createContext();
export const CovidProvider = props => {
    const [country, setCountry] = useState([])
    const [results , setResults] = useState([])
    const [quality , setQuality] = useState({});
    const [query, setQuery] = useState("");
    

    
    return(
        <CovidContext.Provider value = {[country , setCountry]} 
        results = {[results,setResults]}
        quality = {[quality , setQuality]}
        query = {[query , setQuery]}
   
        >
            {props.children}
        </CovidContext.Provider>
    )
}