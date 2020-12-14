import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <div>
        <form>
          <div class="form-group mt-5">
            <input type="text" class="form-control" placeholder="Nome" name = 'username'
            onChange= {(e) => this.handleChange(e)}
            />
          </div>
          <div class="form-group mt-3">
            <input type="text" class="form-control" placeholder="Telefone" name ='telefone'
            onChange= {(e) => this.handleChange(e)}
            />
          </div>
          <div class="form-group mt-3">
            <input type="password" class="form-control" placeholder="Senha" name = 'password'
            onChange= {(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit" class="btn btn-dark btn-block mt-4 mb-2">Cadastrar</button>
          <small>Ao clicar em Cadastrar, você concorda com nossos Termos, Política de Dados e Política de Cookies.</small>
        </form>
      </div>
    )
  }
}
