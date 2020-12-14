import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";
import { Home } from './pages/Home';
import Login from './pages/Login';
import { RegistrarOcorrencia } from './pages/RegistrarOcorrencia';
import { VerOcorrencia } from './pages/VerOcorrencia';
import { Mapa } from './pages/Mapa';
import SignUp  from './pages/Signup';


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
      }
    />
  );
  
  const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route path="/" component ={Home} exact />
        <Route path="/login" component ={Login} />
        <Route path="/ver-ocorrencia" component = {Mapa} />
        <Route path="/registrar-ocorrencia" component={RegistrarOcorrencia} />
        <Route path="/mapa" component={Mapa} />
        <Route path="/signup"component={SignUp}/>

        <Route component={() => <div>ESSA PÁGINA É FRUTO DA SUA IMAGINAÇÃO</div> } />
      </Switch>
    </BrowserRouter>
  );
  
  export default Routes;