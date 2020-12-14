import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FormLogin from '../../components/FormLogin';
import {  Link, withRouter } from "react-router-dom";
import { login } from "../../services/auth";
import api from "../../services/api";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      email: "",
      senha: "",
      telefone: "1234",
      error: ""
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin = async e => {
    e.preventDefault();
    const { email, senha } = this.state;
    if (!email || !senha) {
      this.setState({ error: "Preencha email e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/login", { email, senha });
        login(response.data.token);
        this.props.history.push("/app");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais."
        });
      }
    }
  };
  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
  };
  render() {
    return (
    <div>
      <Header/>
      {this.state.error && <p>{this.state.error}</p>}
      <div class="card" id="formulario">
      <div class="card-body">
        <h1 class="card-title text-center">Login</h1>
        <div>
        <form action="./RegistrarOcorrencia.html" >
          <div class="form-group mt-5">
            <input type="text" class="form-control" placeholder="Email" name='email'
            onChange = {(e) => this.handleChange(e)} />
          </div>
          <div class="form-group mt-3">
            <input type="password" class="form-control" placeholder="Senha" name='senha'
            onChange= {(e) => this.handleChange(e)} />
          </div>
          <button type="submit" class="btn btn-dark btn-block mt-4">Entrar</button>
        </form>
      </div>
        <h5 class="text-center mt-4">Não tem uma conta?</h5>
        <p class="text-center">
          <strong>
            <Link to="./signup">Cadastre-se</Link>
          </strong>
        </p>
      </div>
    </div>
    <Footer/>
    </div>);
}
}
export default withRouter(Login);