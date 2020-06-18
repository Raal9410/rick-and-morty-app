import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import RickAndMortyApp from '../components/RickAndMortyApp'

const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={RickAndMortyApp} exact={true} />
        </Switch>
      </div>
    </BrowserRouter>
  );
  
  export default AppRouter;