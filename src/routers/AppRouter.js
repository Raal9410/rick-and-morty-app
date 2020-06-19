import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import CharacterList from '../components/CharacterList'
import SingelCharacter from '../components/SingleCharacter'
import { useRickAndMortyAPI, Context } from '../context/context'

const AppRouter = () => {
  const data = useRickAndMortyAPI()
  return (
    <Context.Provider value={data}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={CharacterList} exact={true} />
          <Route path="/detail/:id" component={SingelCharacter} />
        </Switch>
      </div>
    </BrowserRouter>
    </Context.Provider>
  )
}
  
  export default AppRouter;