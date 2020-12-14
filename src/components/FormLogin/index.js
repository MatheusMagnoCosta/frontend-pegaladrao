import React, { Component } from 'react'
import { login } from "../../services/auth";
import api from "../../services/api";
import { Link } from "react-router-dom";
import './style.css'

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      email: "",
      senha: "",
      telefone: "",
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
        this.props.history.push("/");
        login(response.data.token);
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais."
        });
      }
    }
  };
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">

          <div className="card" id="formulario">
            <div className="card-body">
              <h1 className="card-title text-center">Login</h1>
              <div>
                <form onSubmit={this.handleLogin}>
                  <div className="form-group mt-5">
                    <input type="text" className="form-control" placeholder="Email" name='email' required
                      onChange={(e) => this.setState({ email: e.target.value })} />
                  </div>
                  <div className="form-group mt-3">
                    <input type="password" className="form-control" placeholder="Senha" name='senha' required
                      onChange={(e) => this.setState({ senha: e.target.value })} />
                  </div>
                  <button type="submit" className="btn btn-dark btn-block mt-4">Entrar</button>
                      {this.state.error && <p>{this.state.error}</p>}
                </form>
              </div>
              <h5 className="text-center mt-4">Não tem uma conta?</h5>
              <p className="text-center">
                <strong>
                  <Link to="./signup">Cadastre-se</Link>
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
