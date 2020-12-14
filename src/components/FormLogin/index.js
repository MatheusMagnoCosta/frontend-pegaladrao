import React, { Component } from 'react'


export default class index extends Component {
  render() {
    return (
      <div>
        <form action="./RegistrarOcorrencia.html" >
          <div class="form-group mt-5">
            <input type="text" class="form-control" placeholder="Telefone" name='telefone'
            onChange = {(e) => this.handleChange(e)} />
          </div>
          <div class="form-group mt-3">
            <input type="password" class="form-control" placeholder="Senha" name='password'
            onChange= {(e) => this.handleChange(e)} />
          </div>
          <button type="submit" class="btn btn-dark btn-block mt-4">Entrar</button>
        </form>
      </div>
    )
  }
}
