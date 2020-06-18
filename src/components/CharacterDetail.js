import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CharacterDetail = (props) => {
    const [character, setCharacter] = useState('')
    const id = props.match.params.id
    const charLoad = () => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => {
            setCharacter(res.data)
            console.log({...res.data})
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        console.log(character)
        charLoad()
    }, []) //eslint-disable-line

    const goBack = () => {
        props.history.push('/')
    }

      return(
          <div>
          <button onClick={goBack}>Go Back</button>
            <img src={character.image} alt={character.id}/>
            <h2>Name: {character.name}</h2>
            <h4>Status: {character.status}</h4>
            <h4>Species: {character.species} </h4>
            <h4>Gender: {character.gender}</h4>
            {/* <h4>Gender: {character.origin.name}</h4> */}
          </div>
      )
}

export default CharacterDetail