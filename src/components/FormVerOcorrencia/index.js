import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">

          <div className="card" id="registrarOcorrenciaForm">
            <div className="card-body">
              <h1 className="card-title text-center">Buscar por ocorrência</h1>
              <div></div>
              <form>
                <select className="form-control mb-4 formcolor" required>
                  <option>Estado</option>
                  <option>Piauí</option>
                </select>
                <select className="form-control mb-4 formcolor" required>
                  <option>Cidade</option>
                  <option>Teresina</option>
                </select>
                <input
                  type="text"
                  className="form-control mb-4 formcolor"
                  placeholder="Bairro"
                />
                <button
                  type="submit"
                  className="btn btn-dark btn-block mt-4 btn-ocorrencia"
                >
                  Buscar
              </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
