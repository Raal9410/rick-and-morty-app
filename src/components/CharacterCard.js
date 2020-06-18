import React from 'react'

const CharacterCard = ({character}) => {
    return (
        <div key={character.id}>
            <img src={character.image} alt={character.id}/>
            <h2>{character.name}</h2>
            <h4>{character.status} - {character.species}</h4>
            Last known location:
            <h4>{character.location.name}</h4>
        </div>
    )
}

export default CharacterCard