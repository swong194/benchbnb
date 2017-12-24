import React from 'react';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <header>
        <h1>Bench BnB</h1>
        <Route exact path='/' component={GreetingContainer} />
      </header>
      <Route path="/login" component={SessionFormContainer} />
      <Route path="/signup" component={SessionFormContainer} />
    </div>
  );
};

export default App;
