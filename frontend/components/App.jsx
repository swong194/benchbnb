import React from 'react';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';
import Auth from '../util/route_util.jsx';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <header>
        <h1>Bench BnB</h1>
        <Switch>
          <Auth path='/signup' component={SessionFormContainer} />
          <Auth path='/login' component={SessionFormContainer} />
          <Route path='/' component={GreetingContainer} />
        </Switch>
      </header>
    </div>
  );
};

export default App;
