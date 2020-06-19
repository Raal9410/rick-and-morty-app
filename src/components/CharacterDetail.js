import React from 'react'
import styled from 'styled-components'

const Container = styled.div `
  display: flex;
  width: 99vw;
  height: 100vh;
  justify-content: space-around;
  flex-direction: column;
  @media(min-width: 600px){
    width: 90vw;
    height: 90vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  };
`
const Image = styled.img `
    border-radius: 1rem;
    margin-top: -3rem;
    object-fit: contain;
    @media(min-width: 600px){
        width: 25rem;
        border-radius: 50%;
        margin-left: 2.8rem;
        object-fit: cover;
    }
`
const Title = styled.h2 `
    font-size: 1.5rem;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 1px;
    margin-top: -100px;
    @media(min-width: 600px){
        font-size: 1.5rem;
        font-family: Arial, Helvetica, sans-serif;
        margin-bottom: -10px;
    };
    @media(min-width: 1000px){
        font-size: 2rem;
        font-family: Arial, Helvetica, sans-serif;
        margin-bottom: -10px;
    };
    @media(max-width: 400px){
      font-size: 1.2rem;
      font-family: Arial, Helvetica, sans-serif;
      margin-bottom: 1px;
    }
`
const Text = styled.h4 `
    font-size: 1.3rem;
    font-family: Arial, Helvetica, sans-serif;
    object-fit: cover;
    @media(min-width: 600px){
        font-size: 1.2rem;
        font-family: Arial, Helvetica, sans-serif;
    };
    @media(min-width: 1000px){
        font-size: 1.5rem;
        font-family: Arial, Helvetica, sans-serif;
    };
    @media(max-width: 400px){
      font-size: 1rem;
      font-family: Arial, Helvetica, sans-serif;
      margin-bottom: 1px;
    }
`
const TextContent = styled.div `
    margin-left: 1rem;
    justify-content: space-evenly;
    @media(min-width: 1000px){
        margin-left: 10rem;
        justify-content: space-evenly;
    };
    @media(min-width: 600px){
        margin-left: 5rem;
        justify-content: space-evenly;
    };
`

const CharacterDetail = ({character}) => {
      return(
          <Container>
            <Image src={character.image} alt={character.id}/>
            <TextContent>
            <Title>Name: {character.name}</Title>
            <Text>Status: {character.status}</Text>
            <Text>Species: {character.species} </Text>
            <Text>Gender: {character.gender}</Text>
            <Text>Origin: {character.origin && character.origin.name}</Text> 
            <Text>Location: {character.location && character.location.name}</Text> 
            </TextContent>
          </Container>
      )
}

export default CharacterDetail