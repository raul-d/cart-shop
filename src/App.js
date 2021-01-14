import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { Header } from './components';
import { Home } from './pages';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
