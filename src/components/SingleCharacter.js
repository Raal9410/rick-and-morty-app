import React, {useContext, useEffect} from 'react'
import { Context } from '../context/context'
import CharacterDetail from './CharacterDetail'

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
        <div>
        <button onClick={goBack}> Go Back </button>
        <CharacterDetail character={singleCharacter}/>
        </div>
    )
}

export default SingleCharacterView