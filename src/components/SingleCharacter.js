import React, {useContext, useEffect} from 'react'
import { Context } from '../context/context'
import CharacterDetail from './CharacterDetail'

const SingleCharacterView = (props) => {
    const id = props.match.params.id
    const {singleCharacter, fetchOneCharacter} = useContext(Context)

    useEffect(() => {
        fetchOneCharacter(id)
    }, []) //eslint-disable-line

    return(
        <div>
        <CharacterDetail character={singleCharacter}/>
        </div>
    )
}

export default SingleCharacterView