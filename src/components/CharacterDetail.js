import React from 'react'

const CharacterDetail = ({character}) => {
      return(
          <div>
            <img src={character.image} alt={character.id}/>
            <h2>Name: {character.name}</h2>
            <h4>Status: {character.status}</h4>
            <h4>Species: {character.species} </h4>
            <h4>Gender: {character.gender}</h4>
            <h4>Origin: {character.origin.name}</h4> 
            <h4>Location: {character.location.name}</h4> 
          </div>
      )
}

export default CharacterDetail