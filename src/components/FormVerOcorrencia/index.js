import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <div>
        <form action="./mapa.html">
              <select className="form-control mb-4 formcolor">
                <option>Estado</option>
                <option>Piauí</option>
              </select>
              <select className="form-control mb-4 formcolor">
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
    )
  }
}
