import React, { Component } from 'react'
import api from "../../services/api";
import "./style.css"

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
    this.handleSignUp = this.handleSignUp.bind(this);
  }
  handleSignUp = async e => {
    e.preventDefault();
    const { nome, email, senha, telefone } = this.state;
    console.log({ nome, email, senha, telefone })
    if (!nome || !email || !senha || !telefone) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        await api.post("/usuarios", { nome, email, senha, telefone });
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta." });
      }
    }
  };
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">

          <div class="card" id="formulario">
            <div class="card-body">
              <h1 class="card-title text-center">Sign up</h1>
              <div>
                <form onSubmit={this.handleSignUp}>
                  <div class="form-group mt-5">
                    <input type="text" class="form-control" placeholder="Nome" name='nome' required
                      onChange={(e) => this.setState({ nome: e.target.value })}
                      />
                  </div>
                  <div class="form-group mt-3">
                    <input type="text" class="form-control" placeholder="Telefone" name='telefone' required
                      onChange={(e) => this.setState({ telefone: e.target.value })}
                    />
                  </div>
                  <div class="form-group mt-3">
                    <input type="text" class="form-control" placeholder="Email" name='email' required
                      onChange={(e) => this.setState({ email: e.target.value })}
                      />
                  </div>
                  <div class="form-group mt-3">
                    <input type="password" class="form-control" placeholder="Senha" name='senha'
                      onChange={(e) => this.setState({ senha: e.target.value })}
                      />
                  </div>
                  <button type="submit" class="btn btn-dark btn-block mt-4 mb-2">Cadastrar</button>
                      {this.state.error && <p>{this.state.error}</p>}
                  <small>Ao clicar em Cadastrar, você concorda com nossos Termos, Política de Dados e Política de Cookies.</small>
                </form>
              </div>
              <p />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
