import { useState, createContext } from "react";
import API from "../config/API";

const useRickAndMortyAPI = () => {
const [state, setState] = useState({
    loading: false,
    error: null,
    characters: [],
    page: 1
  });

    //const [page, setPage] = useState(1)

const fetchCharacters = async () => {
    setState(prevState => ({
      ...prevState,
      loading: true
    }));

    try {
      const {
        data: { results }
      } = await API.get(`/character/?page=${state.page}`);

      setState(prevState => ({
        ...prevState,
        loading: false,
        characters: results
      }));
    } catch (e) {
      setState(prevState => ({
        ...prevState,
        loading: false,
        error: e.response && e.response.error ? e.response.error : e.message
      }));
    }
  };

const nextPage = () => {
    if(state.page < 30){
        setState(prevState => ({
            ...prevState,
            page: prevState.page + 1,
        }))
    }
}

const prevPage = () => {
    if(state.page !== 1) {
      setState(prevState => ({
          ...prevState,
          page: prevState.page - 1
      }))
    }

}
  return { ...state, fetchCharacters, nextPage, prevPage };
};

const Context = createContext(null);

export { useRickAndMortyAPI, Context };
