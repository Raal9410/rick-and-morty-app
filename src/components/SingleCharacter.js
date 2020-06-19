import React, {useContext, useEffect} from 'react'
import { Context } from '../context/context'
import CharacterDetail from './CharacterDetail'
import styled from 'styled-components'

const DetailContainer = styled.div `
    background-color:#EDE7F6;
    height: auto;
    width: 100vw;
    margin: 0;
    @media(min-width: 600px){
        background-color:#EDE7F6;
        height: 96vh;
        width: 99vw;
        margin: 0;
    };
    @media(max-width: 400px){
        width: auto;
    };
`
const Button = styled.button `
  display: inline-block;
  color:  #32bcd0;
  font-size: .8rem;
  width: 8rem;
  padding: 0.25rem 1rem;
  border: 2px solid #aaec4d;
  margin-top: 0.5rem
  border-radius: 3px;
  margin-left: 0px;
  background: #e3e3e3;
  @media(min-width: 600px){
    &:hover{
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  };
    background: #e3e3e3;
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

const SingleCharacterView = (props) => {
    const id = props.match.params.id
    const {singleCharacter, fetchOneCharacter} = useContext(Context)

    const goBack = () => {
        props.history.goBack()
    }

    useEffect(() => {
        fetchOneCharacter(id)
    }, []) //eslint-disable-line

    return(
        <DetailContainer>
        <Button onClick={goBack}> Go Back </Button>
        <CharacterDetail character={singleCharacter}/>
        </DetailContainer>
    )
}

export default SingleCharacterView