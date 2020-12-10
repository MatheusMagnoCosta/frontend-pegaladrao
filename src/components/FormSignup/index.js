import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <div>
        <form>
          <div class="form-group mt-5">
            <input type="text" class="form-control" placeholder="Nome" />
          </div>
          <div class="form-group mt-3">
            <input type="text" class="form-control" placeholder="Telefone" />
          </div>
          <div class="form-group mt-3">
            <input type="password" class="form-control" placeholder="Senha" />
          </div>
          <button type="submit" class="btn btn-dark btn-block mt-4 mb-2">Cadastrar</button>
          <small>Ao clicar em Cadastrar, você concorda com nossos Termos, Política de Dados e Política de Cookies.</small>
        </form>
      </div>
    )
  }
}
