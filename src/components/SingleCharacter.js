import React, {useContext, useEffect} from 'react'
import { Context } from '../context/context'
import CharacterDetail from './CharacterDetail'

const SingleCharacterView = () => {
    const {singleCharacter, fetchOneCharacter} = useContext(Context)

    useEffect(() => {
        fetchOneCharacter()
    }, []) //eslint-disable-line

    return(
        <div>
        <CharacterDetail />
        </div>
    )
}

export default SingleCharacterView