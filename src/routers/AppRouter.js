import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import RickAndMortyApp from '../components/RickAndMortyApp'
import CharacterDetail from '../components/CharacterDetail'

const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={RickAndMortyApp} exact={true} />
          <Route path="/detail/:id" component={CharacterDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
  
  export default AppRouter;