import { useState, createContext } from "react";
import API from "../config/API";

const useRickAndMortyAPI = () => {
const [state, setState] = useState({
    loading: false,
    error: null,
    characters: [],
    page: 1,
    singleCharacter: {}
  });

    //const [page, setPage] = useState(1)

const fetchCharacters = async (direction) => {
    setState(prevState => ({
      ...prevState,
      loading: true
    }));

    try{
      if(direction === 'next'){
        const {
          data: { results }
        } = await API.get(`/character/?page=${state.page + 1}`);
  
        setState(prevState => ({
          ...prevState,
          loading: false,
          characters: results,
          page: prevState.page +1
        }));
        return
      } if(direction === 'prev'){
        const {
          data: { results }
        } = await API.get(`/character/?page=${state.page - 1}`);
  
        setState(prevState => ({
          ...prevState,
          loading: false,
          characters: results,
          page: prevState.page -1
        }));
        return
      } else {
        const {
          data: { results }
        } = await API.get(`/character/?page=${state.page}`);
  
        setState(prevState => ({
          ...prevState,
          loading: false,
          characters: results
        }));
        return
      } 
    } catch (e) {
      setState(prevState => ({
        ...prevState,
        loading: false,
        error: e.response && e.response.error ? e.response.error : e.message
      }));
    }
  };

const fetchOneCharacter = async (id) => {
  setState(prevState => ({
    ...prevState,
    loading: true
  }))
    try{
      const { 
       data: {result} 
       } = await API.get(`/character/${id}`)
       setState(prevState => ({
        ...prevState,
        loading: false,
        singleCharacter: result,
      }));
    } catch (e) {
      setState(prevState => ({
        ...prevState,
      loading: false,
      error: e.response && e.response.error ? e.response.error : e.message
    }));
  }
}

const nextPage = () => {
    if(state.page >= 1 || state.page <= 30){
      fetchCharacters('next')
    }
}

const prevPage = () => {
    if(state.page > 1) {
      fetchCharacters('prev')
    }

}
  return { ...state, fetchCharacters, nextPage, prevPage, fetchOneCharacter };
};

const Context = createContext(null);

export { useRickAndMortyAPI, Context };
