import React, { Component } from 'react'


export default class index extends Component {
  render() {
    return (
      <div>
        <form action="./RegistrarOcorrencia.html" >
          <div class="form-group mt-5">
            <input type="text" class="form-control" placeholder="Telefone" />
          </div>
          <div class="form-group mt-3">
            <input type="password" class="form-control" placeholder="Senha" />
          </div>
          <button type="submit" class="btn btn-dark btn-block mt-4">Entrar</button>
        </form>
      </div>
    )
  }
}
