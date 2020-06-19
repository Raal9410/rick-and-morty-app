import React, { useContext, useEffect} from 'react'
import { Context } from '../context/context'
import CharacterCard from './CharacterCard'
import styled from 'styled-components'

const Characters = styled.div `
  margin: 2rem
`
const Grid = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
  padding-bottom: 1.5rem;
`
const ImageContainer = styled.div `
  display: flex;
  justify-content: center;
  }
`
const Image = styled.img `
  width: 20rem;
  @media(min-width: 600px){
    width: 30rem
  }
`

const Button = styled.button `
  display: inline-block;
  color:  #32bcd0;
  font-size: 1rem;
  width: 10rem;
  padding: 0.25rem 1rem;
  border: 2px solid #aaec4d;
  margin-top: 0.5rem
  border-radius: 3px;
  margin-left: 10px;
  @media(min-width: 600px){
    &:hover{
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  };
    display: inline-block;
    color:  #32bcd0;
    font-size: 1rem;
    width: 10rem;
    padding: 0.25rem 1rem;
    border: 2px solid #aaec4d;
    margin-top: 0.5rem
    border-radius: 3px;
    margin-left: 10px;
  }
`
const ButtonFixed = styled.div `
  position: fixed;
  bottom: 1rem;
`
const ButtonContainer = styled.div `
  display: flex;
  justify-content: space-around;
`
const CharacterList = () => {
    const { characters, fetchCharacters } = useContext(Context)
    const { nextPage, prevPage} = useContext(Context)

    useEffect(() => {
        fetchCharacters()
    }, []) //eslint-disable-line
      return(
        <Characters>
        <ImageContainer>
          <Image src='https://upload.wikimedia.org/wikipedia/en/c/c8/Rick_and_Morty_logo.png' alt="rmlogo"/>
        </ImageContainer>
          <Grid>
            {characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </Grid>
          <ButtonContainer>
          <ButtonFixed>
            <Button onClick={nextPage}>Next</Button>
            <Button onClick={prevPage}>Previous</Button>
            </ButtonFixed>
          </ButtonContainer>
        </Characters>
      )
}

export default CharacterList