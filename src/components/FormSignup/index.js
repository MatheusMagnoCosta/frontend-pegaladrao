import React, { Component } from 'react'
import api from "../../services/api";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      email: "",
      senha: "",
      telefone: "1234",
      error: ""
    };
    this.handleSignUp = this.handleSignUp.bind(this);
  }
  handleSignUp = async e => {
    e.preventDefault();
    const { nome, email, senha } = this.state;
    if (!nome || !email || !senha) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        await api.post("/usuarios", { nome, email, senha });
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta." });
      }
    }
  };
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <div class="card" id="formulario">
          <div class="card-body">
            <h1 class="card-title text-center">Sign up</h1>
            <div>
              <form>
                <div class="form-group mt-5">
                  <input type="text" class="form-control" placeholder="Nome" name='nome'
                    onChange={(e) => this.handleChange(e)}
                  />
                </div>
                <div class="form-group mt-3">
                  <input type="text" class="form-control" placeholder="Email" name='email'
                    onChange={(e) => this.handleChange(e)}
                  />
                </div>
                <div class="form-group mt-3">
                  <input type="password" class="form-control" placeholder="Senha" name='senha'
                    onChange={(e) => this.handleChange(e)}
                  />
                </div>
                <button type="submit" class="btn btn-dark btn-block mt-4 mb-2">Cadastrar</button>
                <small>Ao clicar em Cadastrar, você concorda com nossos Termos, Política de Dados e Política de Cookies.</small>
              </form>
            </div>
            <p />
          </div>
        </div>
      </div>
    )
  }
}
