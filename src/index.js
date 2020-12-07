import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from "react-router-dom"

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { RegistrarOcorrencia } from './pages/RegistrarOcorrencia';
import { VerOcorrencia } from './pages/VerOcorrencia';
import { Mapa } from './pages/Mapa';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component ={Home} exact />
      <Route path="/login" component ={Login} />
      <Route path="/ver-ocorrencia" component = {VerOcorrencia} />
      <Route path="/registrar-ocorrencia" component={RegistrarOcorrencia} />
      <Route path="/mapa" component={Mapa} />

      <Route component={() => <div>ESSA PÁGINA É FRUTO DA SUA IMAGINAÇÃO</div> } />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
