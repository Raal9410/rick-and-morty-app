import React from 'react'
import {Link} from 'react-router-dom'

const CharacterCard = ({character}) => {
    return (
        <div key={character.id}>
            <img src={character.image} alt={character.id}/>
            <h2>{character.name}</h2>
            <h4>{character.status} - {character.species}</h4>
            Last known location:
            <h4>{character.location.name}</h4>
            <Link to={`/detail/${character.id}`}>Details</Link>
        </div>
    )
}

export default CharacterCard