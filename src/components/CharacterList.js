import React, { useContext, useEffect} from 'react'
import { Context } from '../context/context'
import CharacterCard from './CharacterCard'

const CharacterList = () => {
    const { characters, fetchCharacters } = useContext(Context)

    useEffect(() => {
        fetchCharacters()
    }, []) //eslint-disable-line
      return(
          <div>
          {characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
          ))}
          </div>
      )
}

export default CharacterList