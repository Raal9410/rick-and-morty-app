import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div `
    background: #EDE7F6;
    padding: 1.5rem;
    border-radius: 1rem;
    width: 20rem;
    margin: .5rem;
    height: 10rem;
    display: flex;
    flex-direction: row;
  @media (min-width: 600px){
        background: #EDE7F6;
        padding: 1rem;
        border-radius: 1rem;
        width: 18rem;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
  }
  @media (max-width: 400px){
    background: #EDE7F6;
    padding: 1.5rem;
    border-radius: 1rem;
    width: 18rem;
    margin: .5rem;
    height: 10rem;
    display: flex;
    flex-direction: row;
  }
`
const Image = styled.img `
    width: 8rem;
    border-radius: 50%;
    margin-top: 1rem;
    @media(min-width: 600px){
        width: 12rem;
        border-radius: 1em;
        margin-left: 2.8rem;
    }
`
const Title = styled.h2 `
    font-size: 1.3rem;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 1px;
    @media(min-width: 600px){
        font-size: 2rem;
        font-family: Arial, Helvetica, sans-serif;
        margin-bottom: -10px;
    }
`
const Text = styled.h4 `
    font-size: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    @media(min-width: 600px){
        font-size: 1.2rem;
        font-family: Arial, Helvetica, sans-serif;
    }
`
const Text1 = styled.h4 `
    font-size: .8rem;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 1px;
    margin-bottom: 1px;
    @media(min-width: 600px){
        font-size: 1rem;
        font-family: Arial, Helvetica, sans-serif;
        margin-top: 1px;
        margin-bottom: 1px;
    }
`
const Text3 = styled.h5 `
    ont-size: .8rem;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 2px;
    color: grey;
    font-weight: 10;
    @media(min-width: 600px){
        color: grey;
        font-size: 1rem;
        font-family: Arial, Helvetica, sans-serif;
        margin-bottom: 1px;
        font-weight: 10;
    }
`

const TextContent = styled.div `
    margin-left: 1rem;
    justify-content: space-evenly;
    @media(mid-width: 600px){
        margin-left: 0;
        justify-content: space-evenly;
    }
`


const CharacterCard = ({character}) => {
    return (
        <Card key={character.id}>
            <Link to={`/detail/${character.id}`}>
                <Image src={character.image} alt={character.id}/>
            </Link>
            <TextContent>
            <Title>{character.name}</Title>
            <Text>{character.status} - {character.species}</Text>
            <Text3>Last known location:</Text3>
            <Text1>{character.location.name}</Text1>
            </TextContent>
        </Card>
    )
}

export default CharacterCard