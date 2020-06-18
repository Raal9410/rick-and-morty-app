import React from 'react'

import {useRickAndMortyAPI, Context} from '../context/context'

const SingleCharacterView = () => {
    const data = useRickAndMortyAPI()
    return(
        <div>
            <Context.Provider value={data}>
                Character View
            </Context.Provider>
        </div>
    )
}

export default SingleCharacterView