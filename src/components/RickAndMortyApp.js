import React from 'react'
import CharacterList from './CharacterList'

import { useRickAndMortyAPI, Context} from '../context/context'

const RickAndMortyApp = () => {
    const data = useRickAndMortyAPI()
    return(
        <div>
            <Context.Provider value={data}>
                <CharacterList/>
            </Context.Provider>
        </div>
    )
}

export default RickAndMortyApp