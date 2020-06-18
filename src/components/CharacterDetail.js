import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CharacterDetail = (props) => {
    const [character, setCharacter] = useState('')
    const id = props.match.params.id

    const charLoad = () => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => {
            setCharacter(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        charLoad()
    }, []) //eslint-disable-line

      return(
          <div>
            <img src={character.image} alt={character.id}/>
            <h2>Name: {character.name}</h2>
            <h4>Status: {character.status}</h4>
            <h4>Species: {character.species} </h4>
            <h4>Gender: {character.gender}</h4>
            <h4>Origin: {character.origin.name}</h4>
            <h4>Last seen on: {character.location.name}</h4>
          </div>
      )
}

export default CharacterDetail