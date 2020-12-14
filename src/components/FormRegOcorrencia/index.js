import React, { Component } from 'react'
import "./style.css"

export default class index extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">

          <div className="card" id="registrarOcorrenciaForm">
            <div className="card-body">
              <h1 className="card-title text-center">Registrar ocorrência</h1>
              <div>
                <form>
                  <select className="form-control mb-4 formcolor" required>
                    <option>Ocorrência</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                  <select className="form-control mb-4 formcolor" required>
                    <option>Estado</option>
                    <option>Piauí</option>
                  </select>
                  <select className="form-control mb-4 formcolor" required>
                    <option>Cidade</option>
                    <option>Teresina</option>
                  </select>
                  <input type="text" className="form-control mb-4 formcolor" placeholder="Bairro" required/>
                  <input type="text" className="form-control mb-4 formcolor" placeholder="Rua" />
                  <button type="submit" className="btn btn-dark btn-block mt-4 btn-ocorrencia">Registrar ocorrência</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
